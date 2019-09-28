const mongoose = require('mongoose');
const shortid = require('shortid');
const checkLib = require('../libs/checkLib');
const timeLib = require('../libs/timeLib');
const logger = require('../libs/loggerLib');
const responseLib = require('../libs/responseLib');
const emailLib = require('../libs/emailLib');
const EventsModel = mongoose.model('Events');

/**
 * @description this will get all the events to client
 * @author Titus Vimal Raj
 * @param {*} req 
 * @param {*} res 
 * @returns {Response} response
 */
let getAllEvents = (req, res) => {

    fetchAllEvents = () => {


        return new Promise((resolve, reject) => {
            EventsModel.find({ userId:req.params.userId }).select('-_id -__v')
                .exec((err, eventData) => {
                    if (err) {
                        logger.error('error in fetching all the events', 'eventsController:getAllEvents:fetchAllEvents()', 1);
                        let apiResponse = responseLib.generateResponse(true, 'could not load the Events(internal server error)', 500, null);
                        reject(apiResponse);
                    }
                    else if (checkLib.isEmpty(eventData)) {
                        logger.error('no events found', 'eventsController:getAllEvents:fetchAllEvents()', 1);
                        let apiResponse = responseLib.generateResponse(true, 'No Events Available', 201, null);
                        reject(apiResponse);
                    }
                    else {
                        console.log(eventData);
                        resolve(eventData);
                    }
                })
        })
    }// end of fetch all Events

    fetchAllEvents(req, res)
        .then((response) => {
            let apiResponse = responseLib.generateResponse(false, 'Events fetched successfully', 200, response);
            res.status(apiResponse.status).send(apiResponse);
        }).catch((err) => {
            res.status(err.status).send(err);
        })

}//end get All Events



/**
 * @description Will delete event from DB
 * @author Titus Vimal Raj
 * @param {*} req 
 * @param {*} res
 * @returns {Response} response
 */
let deleteEvent = (req, res) => {
    deleteEventDB = () => {


        return new Promise((resolve, reject) => {
            console.log(req.params.eventId);
            EventsModel.findOneAndRemove({ eventId: req.params.eventId }, (err, result) => {
                if (err) {
                    logger.error('failed to find an event', 'eventsController:deleteEvent:deleteEventDB()', 1);
                    let apiResponse = responseLib.generateResponse(true, 'failed to find an Event', 500, null);
                    reject(apiResponse);
                }
                else if (checkLib.isEmpty(result)) {
                    logger.error('event not found', 'eventsController:deleteEvent:deleteEventDB()', 1);
                    let apiResponse = responseLib.generateResponse(true, 'Event not found', 202, null);
                    reject(apiResponse);
                }
                else {
                    resolve(result);
                }
            })
        })
    }//end of delete event DB

    deleteEventDB(req, res)
        .then((response) => {
            let apiResponse = responseLib.generateResponse(false, `deleted event ${response.title} sucessfully`, 200, response);
            res.status(apiResponse.status).send(apiResponse);
        }).catch((err) => {
            res.status(err.status).send(err);
        })

}//end delete event 



/**
 * @description Will edit an event in DB
 * @author Titus Vimal Raj
 * @param {*} req 
 * @param {*} res
 * @returns {Response} response
 */

let editEvent = (req, res) => {
  
    // function to edit event.
    modifyEvent = () => {
      return new Promise((resolve, reject) => {
        console.log(req.params.eventId);
        // console.log(req.body.eventId);
        console.log("We are now inside Edit event function");
        let findQuery = {
          eventId: req.params.eventId
        }
  
        let updateQuery = {
            eventId: req.body.eventId,
            userId: req.body.userId,
            adminId: req.body.adminId,
            start: new Date(req.body.start),
            end: new Date(req.body.end),
            title: req.body.title,
            color: { primary: req.body.color.primary, secondary: req.body.color.secondary },
            actions: req.body.actions,
            allDay: req.body.allDay,
            resizable: {
              beforeStart: false,
              afterEnd: false
            },
            draggable: false,
            reminder: req.body.reminder

        }

            EventsModel.update(findQuery,updateQuery, (err, result) => {
                if (err) {
                    logger.error('failed to find an event', 'eventsController:editEvent:modifyEvent()', 1);
                    let apiResponse = responseLib.generateResponse(true, 'failed to find an Event', 500, null);
                    reject(apiResponse);
                }
                else if (checkLib.isEmpty(result)) {
                    logger.error('event not found', 'eventsController:editEvent:modifyEvent()', 1);
                    let apiResponse = responseLib.generateResponse(true, 'Event not found', 202, null);
                    reject(apiResponse);
                }
                else {
                    resolve(result);
                    
                }
            })
        })
    }//end of modify event DB

    modifyEvent(req, res)
        .then((response) => {
            let apiResponse = responseLib.generateResponse(false, `Event found and updated sucessfully`, 200, response);
            res.status(apiResponse.status).send(apiResponse);
        }).catch((err) => {
            res.status(err.status).send(err);
        })

  } // end of the editEvent function


  /**
 * @description Will get all events associated to an admin from DB
 * @author Titus Vimal Raj
 * @param {*} req 
 * @param {*} res
 * @returns {Response} response
 */

let getEventsAssociatedWithAdmin = (req,res)=>{
    getToAllAdminAssociatedEvents = () => {
        return new Promise((resolve, reject) => {
            EventsModel.find({ adminId:req.params.adminId}).select('-_id -__v')
                .exec((err, eventData) => {
                    if (err) {
                        logger.error('error in fetching all the events', 'eventsController:getEventsAssociatedWithAdmin:getToAllAdminAssociatedEvents()', 1);
                        let apiResponse = responseLib.generateResponse(true, 'could not load the Events(internal server error)', 500, null);
                        reject(apiResponse);
                    }
                    else if (checkLib.isEmpty(eventData)) {
                        logger.error('no events found', 'eventsController:getEventsAssociatedWithAdmin:getToAllAdminAssociatedEvents()', 1);
                        let apiResponse = responseLib.generateResponse(true, 'No Events Associated with this admin user', 201, null);
                        reject(apiResponse);
                    }
                    else {
                        console.log(eventData);
                        
                        resolve(eventData);
                    }
                })
        })
    }//end of  getToAllAdminAssociatedEvents 
    

    getToAllAdminAssociatedEvents(req, res)
        .then((response) => {
            let apiResponse = responseLib.generateResponse(false, 'events Associated with the Admin fetched successfully', 200, response);
            res.status(apiResponse.status).send(apiResponse);
        }).catch((err) => {
            res.status(err.status).send(err);
        })
}//end of getEventsAssociatedWithAdmin

module.exports = {

    getAllEvents: getAllEvents,
    deleteEvent: deleteEvent,
    editEvent: editEvent,
    getEventsAssociatedWithAdmin: getEventsAssociatedWithAdmin
}