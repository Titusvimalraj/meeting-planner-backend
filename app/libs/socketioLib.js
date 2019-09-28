/**
 * modules dependencies.
 */
const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();
const emailLib = require('../libs/emailLib');

const tokenLib = require("./tokenLib.js");
const checkLib = require("./checkLib.js");
const response = require('./responseLib')
const EventModel = mongoose.model('Events');
const AuthModel = mongoose.model('Auth');


let setServer = (server) => {

    let allOnlineUsers = []

    let io = socketio.listen(server);

    let myIo = io.of('/')

    myIo.on('connection',(socket) => {

        console.log("on connection--emitting verify user");

        socket.emit("verifyUser", "");

        // code to verify the user and make him online

        socket.on('set-user',(authToken) => {

            console.log('set-user is called');
            console.log(authToken)
            AuthModel.findOne({ authToken: authToken }, (err, authDetails) => {
                if (err) {
                    logger.error(err.message, 'Socket Connection', 1);
                } else if (checkLib.isEmpty(authDetails)) {
                    logger.error('No AuthorizationKey Is Present', 'Socket Connection', 1);
                } else {

                    tokenLib.verifyToken(authDetails.authToken, authDetails.tokenSecret,(err,user)=>{
                        
                        if(err){
                            socket.emit('auth-error', { status: 500, error: 'Please provide correct auth token' })
                        }
                        else{
        
                            console.log(`user is verified..setting details as ${user}`);
                            let currentUser = user.data;
        
                            // setting socket user id 
                            socket.userId = currentUser.userId
                            console.log(socket.userId);
                            let fullName = `${currentUser.firstName} ${currentUser.lastName}`
                            console.log(`${fullName} is online`);
                            var today = new Date();
                            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
                            let userObj = {userId:currentUser.userId,fullName:fullName,socketId:socket.id,createdOn:time}
                            allOnlineUsers.push(userObj)
                            console.log(allOnlineUsers)
        
                            // setting room name
                            socket.room = 'meetingPlanner'
                            // joining chat-group room.
                            socket.join(socket.room)
                            socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers);
                            
        
                        }
        
        
                    })

                }
            })
          
        }) // end of listening set-user event


        socket.on('disconnect', () => {
            // disconnect the user from socket
            // remove the user from online list
            // unsubscribe the user from his own channel

            console.log("user is disconnected");
            // console.log(socket.connectorName);
            console.log(socket.userId);


            var removeIndex = allOnlineUsers.map(function(user) { return user.userId; }).indexOf(socket.userId);
            allOnlineUsers.splice(removeIndex,1)
            console.log(allOnlineUsers)

            socket.to(socket.room).broadcast.emit('online-user-list',allOnlineUsers);
            socket.leave(socket.room)


            

        


        }) // end of on disconnect


        socket.on('event-add', (data) => {
            console.log("socket event-add called")
            console.log(data);
            data['eventId'] = shortid.generate()
            console.log(data);

            // event to save chat.
            setTimeout(function(){
                eventEmitter.emit('save-event', data);

            },2000)
            myIo.emit(data)
            console.log(data['eventId']);
            myIo.emit('eventId',data['eventId']);
        });

        socket.on('socket-id', (userId) => {
            console.log("socket id event is called")
            let data = { userId:userId,socketId:socket.id}
            console.log(data);
            myIo.emit('socket-userId',data);

        });

        socket.on('socket-reminder-email', (emaildata) => {
            console.log("socket-reminder-email event is called")
            emailLib.sendAnEmail(emaildata);
            myIo.emit('socket-reminder-email-sent',emaildata);

        });

        socket.on('socket-send-email', (emaildata) => {
            console.log("socket-send-email event is called")
            emailLib.sendAnEmail(emaildata);
            myIo.emit('socket-email-sent',emaildata);

        });

        socket.on('notify-updates', (data) => {
            console.log("socket notify-updates called")
            console.log(data);
            socket.broadcast.emit(data.userId, data);
        });


    });

}


// database operations are kept outside of socket.io code.

// saving chats to database.
eventEmitter.on('save-event', (data) => {

    // let today = Date.now();

    let newEvent = new EventModel({
        eventId: data.eventId,
        userId: data.userId,
        adminId: data.adminId,
        adminName: data.adminName,
        start: new Date(data.start),
        end: new Date(data.end),
        title: data.title,
        color: { primary: data.color.primary, secondary: data.color.secondary },
        actions: data.actions,
        allDay: data.allDay,
        resizable: {
          beforeStart: false,
          afterEnd: false
        },
        draggable: false,
        createdOn: new Date(Date.now()),
        reminder: data.reminder
      });

      newEvent.save((err,result) => {
        if(err){
            console.log(`error occurred: ${err}`);
        }
        else if(result == undefined || result == null || result == ""){
            console.log("Event Is Not Saved.");
        }
        else {
            console.log("Event Saved.");
            console.log(result);
        }
    });
    
}); // end of saving chat.

module.exports = {
    setServer: setServer
}