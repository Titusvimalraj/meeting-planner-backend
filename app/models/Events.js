/** modules required for Events model */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Schema to store user Events
 * @author Titus Vimal Raj
 */
let eventsSchema = new Schema(
  {
        eventId: {
        type: String,
        index: true,
        unique: true
        },
        userId: {
            type: String
        },
        adminName: {
            type: String
        },
        adminId:{
            type: String
        },
        start: 
        {
            type: Date,
            default: null
        },
        end: {
            type: Date,
            default: null
        },
        title: {
            type: String,
            default: ' '
        },
        color: { 
            primary: {type: String, default:null }, 
            secondary: {type: String, default: null }
        },
        actions:{type: Array},
        allDay: {
            type: Boolean,
            default: false
        },
        resizable: {
          beforeStart: {
            type: Boolean,
            default: false
        },
          afterEnd: {
            type: Boolean,
            default: false
        }
        },
        draggable: {
            type: Boolean,
            default: false
        },
        createdOn: {
            type: Date
        },
        reminder: {
            type: Boolean
        }
    }
)


module.exports = mongoose.model('Events', eventsSchema);