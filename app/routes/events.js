const appConfig = require('../../config/appConfig');
const eventsController = require('../controllers/eventsController');
const authMiddleware = require('../middlewares/auth');
/**
 * This method is used to define routes for this module
 * @author Titus Vimal Raj
 * @param {*} app 
 */
const setRouter = (app) => {
  let baseUrl = `${appConfig.apiVersion}/events`;
 
 
  // Event operations


/**
     * @apiGroup events
     * @apiVersion  1.0.0
     * @api {get} /api/v1/events/:userId/all api for Getting all Events of User.
     *
     * @apiParam {string} userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (path variables) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
              {
                  "error": false,
                  "message": "Events fetched successfully",
                  "status": 200,
                  "data": [
                      {
                          "color": {
                              "primary": "#80ff80",
                              "secondary": "#ff80ff"
                          },
                          "resizable": {
                              "beforeStart": false,
                              "afterEnd": false
                          },
                          "start": "2019-09-29T06:30:00.000Z",
                          "end": "2019-10-01T06:30:00.000Z",
                          "title": "First Event",
                          "actions": [
                              {
                                  "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                              },
                              {
                                  "label": "<i class=\"fa fa-fw fa-times\"></i>"
                              }
                          ],
                          "allDay": true,
                          "draggable": false,
                          "eventId": "jsgKWsu7k",
                          "userId": "HTRdtiyts",
                          "adminId": "HTRdtiyts",
                          "adminName": "titus vimal raj",
                          "createdOn": "2019-09-28T09:44:23.052Z",
                          "reminder": true
                      },
                      {
                          "color": {
                              "primary": "#80ff80",
                              "secondary": "#ff5959"
                          },
                          "resizable": {
                              "beforeStart": false,
                              "afterEnd": false
                          },
                          "start": "2019-09-29T10:30:00.000Z",
                          "end": "2019-09-30T14:30:00.000Z",
                          "title": "Second Event",
                          "actions": [
                              {
                                  "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                              },
                              {
                                  "label": "<i class=\"fa fa-fw fa-times\"></i>"
                              }
                          ],
                          "allDay": false,
                          "draggable": false,
                          "eventId": "-amJZcMx_",
                          "userId": "HTRdtiyts",
                          "adminId": "HTRdtiyts",
                          "adminName": "titus vimal raj",
                          "createdOn": "2019-09-28T09:44:56.452Z",
                          "reminder": true
                      },
                      {
                          "color": {
                              "primary": "#ff5959",
                              "secondary": "#ff5959"
                          },
                          "resizable": {
                              "beforeStart": false,
                              "afterEnd": false
                          },
                          "start": "2019-09-29T06:30:00.000Z",
                          "end": "2019-10-01T06:30:00.000Z",
                          "title": "Third EVENT",
                          "actions": [
                              {
                                  "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                              },
                              {
                                  "label": "<i class=\"fa fa-fw fa-times\"></i>"
                              }
                          ],
                          "allDay": null,
                          "draggable": false,
                          "eventId": "4zPlqiBH2",
                          "userId": "HTRdtiyts",
                          "adminId": "HTRdtiyts",
                          "adminName": "titus vimal raj",
                          "createdOn": "2019-09-28T09:45:29.972Z",
                          "reminder": true
                      },
                      {
                          "color": {
                              "primary": "#80ffff",
                              "secondary": "#ff80ff"
                          },
                          "resizable": {
                              "beforeStart": false,
                              "afterEnd": false
                          },
                          "start": "2019-09-29T06:30:00.000Z",
                          "end": "2019-10-03T06:30:00.000Z",
                          "title": "Fourth Event",
                          "actions": [
                              {
                                  "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                              },
                              {
                                  "label": "<i class=\"fa fa-fw fa-times\"></i>"
                              }
                          ],
                          "allDay": true,
                          "draggable": false,
                          "eventId": "BdPypmf0k",
                          "userId": "HTRdtiyts",
                          "adminId": "HTRdtiyts",
                          "adminName": "titus vimal raj",
                          "createdOn": "2019-09-28T09:53:24.047Z",
                          "reminder": true
                      },
                      {
                          "color": {
                              "primary": "#ffff80",
                              "secondary": "#ff80c0"
                          },
                          "resizable": {
                              "beforeStart": false,
                              "afterEnd": false
                          },
                          "start": "2019-09-29T06:30:00.000Z",
                          "end": "2019-09-30T06:30:00.000Z",
                          "title": "Fifth Event",
                          "actions": [
                              {
                                  "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                              },
                              {
                                  "label": "<i class=\"fa fa-fw fa-times\"></i>"
                              }
                          ],
                          "allDay": true,
                          "draggable": false,
                          "eventId": "JGJcrHi-4",
                          "userId": "HTRdtiyts",
                          "adminId": "HTRdtiyts",
                          "adminName": "titus vimal raj",
                          "createdOn": "2019-09-28T09:59:57.396Z",
                          "reminder": true
                      }
                  ]
              }
              @apiErrorExample {json} Error-Response:
                {
                      "error": true,
                      "message": "Route not found in the application || Internal serever error",
                      "status": "500 || 404",
                      "data" : "null"
                }

  */
  app.get(`${baseUrl}/:userId/all`, authMiddleware.isAuthorized, eventsController.getAllEvents);

/**
     * @apiGroup events
     * @apiVersion  1.0.0
     * @api {post} /api/v1/events/:eventId/delete api for deleting an Event.
     *
     * @apiParam {string} eventId of an Event. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (path variables) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:

           {
            "error": false,
            "message": "deleted event First Event sucessfully",
            "status": 200,
            "data": {
                      "color": {
                          "primary": "#80ff80",
                          "secondary": "#ff80ff"
                      },
                      "resizable": {
                          "beforeStart": false,
                          "afterEnd": false
                      },
                      "start": "2019-09-29T06:30:00.000Z",
                      "end": "2019-10-01T06:30:00.000Z",
                      "title": "First Event",
                      "actions": [
                          {
                              "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                          },
                          {
                              "label": "<i class=\"fa fa-fw fa-times\"></i>"
                          }
                      ],
                      "allDay": true,
                      "draggable": false,
                      "_id": "5d8f2b77d5ce1035a4a10cbe",
                      "eventId": "jsgKWsu7k",
                      "userId": "HTRdtiyts",
                      "adminId": "HTRdtiyts",
                      "adminName": "titus vimal raj",
                      "createdOn": "2019-09-28T09:44:23.052Z",
                      "reminder": true,
                      "__v": 0
                  }
             }
          @apiErrorExample {json} Error-Response:
                        {
                              "error": true,
                              "message": "Route not found in the application || Internal serever error",
                              "status": "500 || 404",
                              "data" : "null"
                        }
       */


  app.post(`${baseUrl}/:eventId/delete`, authMiddleware.isAuthorized, eventsController.deleteEvent);

/**
     * @apiGroup events
     * @apiVersion  1.0.0
     * @api {post} /api/v1/events/:eventId/edit api for editing an Event.
     *
     * @apiParam {string} eventId of an Event. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (path variables) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:


          {
            "error": false,
            "message": "Event found and updated sucessfully",
            "status": 200,
            "data": {
                "n": 1,
                "nModified": 1,
                "ok": 1
            }
        }
            @apiErrorExample {json} Error-Response:
                                  {
                                        "error": true,
                                        "message": "Route not found in the application || Internal serever error",
                                        "status": "500 || 404",
                                        "data" : "null"
                                  }
  */

  app.put(`${baseUrl}/:eventId/edit`, authMiddleware.isAuthorized, eventsController.editEvent);

/**
     * @apiGroup events
     * @apiVersion  1.0.0
     * @api {get} /api/v1/events/:userId/all api for Getting Events Associated or created by an admin.
     *
     * @apiParam {string} userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (path variables) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:

            {
              "error": false,
              "message": "events Associated with the Admin fetched successfully",
              "status": 200,
              "data": [
                  {
                      "color": {
                          "primary": "#80ff80",
                          "secondary": "#ff5959"
                      },
                      "resizable": {
                          "beforeStart": false,
                          "afterEnd": false
                      },
                      "start": "2019-09-29T10:30:00.000Z",
                      "end": "2019-09-30T14:30:00.000Z",
                      "title": "Second Event Title Edited",
                      "actions": [
                          {
                              "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                          },
                          {
                              "label": "<i class=\"fa fa-fw fa-times\"></i>"
                          }
                      ],
                      "allDay": false,
                      "draggable": false,
                      "eventId": "-amJZcMx_",
                      "userId": "HTRdtiyts",
                      "adminId": "HTRdtiyts",
                      "adminName": "titus vimal raj",
                      "createdOn": "2019-09-28T09:44:56.452Z",
                      "reminder": true
                  },
                  {
                      "color": {
                          "primary": "#ff5959",
                          "secondary": "#ff5959"
                      },
                      "resizable": {
                          "beforeStart": false,
                          "afterEnd": false
                      },
                      "start": "2019-09-29T06:30:00.000Z",
                      "end": "2019-10-01T06:30:00.000Z",
                      "title": "Third EVENT",
                      "actions": [
                          {
                              "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                          },
                          {
                              "label": "<i class=\"fa fa-fw fa-times\"></i>"
                          }
                      ],
                      "allDay": null,
                      "draggable": false,
                      "eventId": "4zPlqiBH2",
                      "userId": "HTRdtiyts",
                      "adminId": "HTRdtiyts",
                      "adminName": "titus vimal raj",
                      "createdOn": "2019-09-28T09:45:29.972Z",
                      "reminder": true
                  },
                  {
                      "color": {
                          "primary": "#80ffff",
                          "secondary": "#ff80ff"
                      },
                      "resizable": {
                          "beforeStart": false,
                          "afterEnd": false
                      },
                      "start": "2019-09-29T06:30:00.000Z",
                      "end": "2019-10-03T06:30:00.000Z",
                      "title": "Fourth Event",
                      "actions": [
                          {
                              "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                          },
                          {
                              "label": "<i class=\"fa fa-fw fa-times\"></i>"
                          }
                      ],
                      "allDay": true,
                      "draggable": false,
                      "eventId": "BdPypmf0k",
                      "userId": "HTRdtiyts",
                      "adminId": "HTRdtiyts",
                      "adminName": "titus vimal raj",
                      "createdOn": "2019-09-28T09:53:24.047Z",
                      "reminder": true
                  },
                  {
                      "color": {
                          "primary": "#ffff80",
                          "secondary": "#ff80c0"
                      },
                      "resizable": {
                          "beforeStart": false,
                          "afterEnd": false
                      },
                      "start": "2019-09-29T06:30:00.000Z",
                      "end": "2019-09-30T06:30:00.000Z",
                      "title": "Fifth Event",
                      "actions": [
                          {
                              "label": "<i class=\"fa fa-fw fa-pencil\"></i>"
                          },
                          {
                              "label": "<i class=\"fa fa-fw fa-times\"></i>"
                          }
                      ],
                      "allDay": true,
                      "draggable": false,
                      "eventId": "JGJcrHi-4",
                      "userId": "HTRdtiyts",
                      "adminId": "HTRdtiyts",
                      "adminName": "titus vimal raj",
                      "createdOn": "2019-09-28T09:59:57.396Z",
                      "reminder": true
                  }
              ]
          }
                    @apiErrorExample {json} Error-Response:
                                  {
                                        "error": true,
                                        "message": "Route not found in the application || Internal serever error",
                                        "status": "500 || 404",
                                        "data" : "null"
                                  }
  */


  app.get(`${baseUrl}/:adminId/info/eventsAssociated`, authMiddleware.isAuthorized, eventsController.getEventsAssociatedWithAdmin);






}

module.exports = {
  setRouter: setRouter
}
