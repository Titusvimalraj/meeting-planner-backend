
const appConfig = require('../../config/appConfig');
const userController = require('../controllers/userController');
const resetPassController = require('../controllers/restPasswordController');
const authMiddleware = require('../middlewares/auth');
/**
 * This method is used to define routes for this module
 * @author Titus Vimal Raj
 * @param {*} app 
 */
const setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for user signup.
     *
     * @apiParam {string} firstName of the user. (body params) (required)
     * @apiParam {string} lastName of the user. (body params) (required)
     * @apiParam {string} mobileNumber of the user. (body params) (required)
     * @apiParam {string} email of the user. (body params) (required)
     * @apiParam {string} password of the user. (body params) (required)
     * @apiParam {string} countryName of the user (body Param) (required)
     * @apiParam {string} userType (Admin||User) of the user (body Param) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
        {
            "error": false,
            "message": "Signed up successfully !",
            "status": 200,
            "data": {
                "userId": "sXK-TyNfO",
                "firstName": "Test",
                "lastName": "User",
                "fullName": "Test User",
                "email": "titusvimalrajc@gmail.com",
                "countryName": "India",
                "mobileNumber": 919888777788,
                "userType": "Admin",
                "createdOn": "2019-09-28T09:33:57.000Z"
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
    app.post(`${baseUrl}/signup`, userController.signUp);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
     * {
    "error": false,
    "message": "login successful",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImdJMDN2S3ZKdSIsImlhdCI6MTU2OTY2MjgwNzA1NSwiZXhwIjoxNTY5NzQ5MjA3LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZVRyYWNraW5nVG9vbCIsImRhdGEiOnsidXNlcklkIjoiSFRSZHRpeXRzIiwiZmlyc3ROYW1lIjoidGl0dXMiLCJsYXN0TmFtZSI6InZpbWFsIHJhaiIsImZ1bGxOYW1lIjoidGl0dXMgdmltYWwgcmFqIiwiZW1haWwiOiJ0aXR1c3ZpbWFscmFqQGdtYWlsLmNvbSIsImNvdW50cnlOYW1lIjoiSW5kaWEiLCJtb2JpbGVOdW1iZXIiOjkxOTA5NDQwNTI4NywidXNlclR5cGUiOiJBZG1pbiIsInNlY3JldEtleSI6Im1lZXRpbmdQbGFubmVyRWR3aXNvciJ9fQ.B9mB3qkpsvXmRd2czkOZuri9rCzeA7R5lEwBhqMHO4Y",
        "userDetails": {
            "userId": "HTRdtiyts",
            "firstName": "titus",
            "lastName": "vimal raj",
            "fullName": "titus vimal raj",
            "email": "titusvimalraj@gmail.com",
            "countryName": "India",
            "mobileNumber": 98889888898,
            "userType": "Admin"
                }
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
    app.post(`${baseUrl}/login`, userController.login);








    app.get(`${baseUrl}/reset`, userController.checkUserExistence);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/sendemail api for user to send email for reset password.
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} ClientUrl . (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
     * {
            "error": false,
            "message": "reset password link sent successfully ! check your inbox",
            "status": 200,
            "data": {
                "accepted": [
                    "vimalraj@gmail.com
                ],
                "rejected": [],
                "envelopeTime": 1039,
                "messageTime": 1017,
                "messageSize": 389,
                "response": "250 2.0.0 OK  1559344676 x18sm8075150pfo.8 - gsmtp",
                "envelope": {
                    "from": "titusvimalraj@gmail.com",
                    "to": [
                        "vimalraj@gmail.com"
                    ]
                },
                "messageId": "<0114b13d-0f87-af2c-cc5c-56a5fe5hj581@gmail.com>"
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
    app.post(`${baseUrl}/sendemail`, userController.sendEmail);

    /**
    * @apiGroup users
    * @apiVersion  1.0.0
    * @api {post} /api/v1/users/reset api for user to send email for reset password.
    * @apiParam {string} email email of the user. (body params) (required)
    * @apiParam {string} password new password of the user. (body params) (required)
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * @apiSuccessExample {object} Success-Response:
    *  {
           "error": false,
           "message": "password reset successful !",
           "status": 200,
           "data": {
               "userId": "KEIWO398d",
               "email": "titusvimalraj@gmail.com"
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
    app.post(`${baseUrl}/reset`, resetPassController.resetPassword);

    /**
  * @apiGroup users
  * @apiVersion  1.0.0
  * @api {post} /api/v1/users/logout api for user to log out of the application.
  * @apiParam {string} userId of the user. (body params) (required)
  * @apiSuccess {object} myResponse shows error status, message, http status code, result.
  * @apiSuccessExample {object} Success-Response:
  * {
        "error": false,
        "message": "Logged Out Successfully",
        "status": 200,
        "data": null
    }
      @apiErrorExample {json} Error-Response:
        {
             "error": true,
             "message": "Route not found in the application || Internal serever error",
             "status": "500 || 404",
             "data" : "null"
        }
 */
    app.post(`${baseUrl}/logout`, userController.logout);



    /**
  * @apiGroup users
  * @apiVersion  1.0.0
  * @api {get} /api/v1/users/:userId/info api to get an user Information .
  * @apiParam {string} userId of the user. (body params) (required)
  * @apiSuccess {object} myResponse shows error status, message, http status code, result.
  * @apiSuccessExample {object} Success-Response:
  * {
        "error": false,
        "message": "User found",
        "status": 200,
        "data": {
            "userId": "HTRdtiyts",
            "firstName": "titus",
            "lastName": "vimal raj",
            "fullName": "titus vimal raj",
            "email": "titusvimalraj@gmail.com",
            "countryName": "India",
            "mobileNumber": 919094405287,
            "userType": "Admin",
            "createdOn": "2019-09-03T18:32:27.000Z"
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

    app.get(`${baseUrl}/:userId/info`, userController.userInfo);

    /**
   * @apiGroup users
   * @apiVersion  1.0.0
   * @api {get} /api/v1/users/info/allUsers api to all users Information .
   * @apiParam {string} userId of the user. (body params) (required)
   * @apiSuccess {object} myResponse shows error status, message, http status code, result.
   * @apiSuccessExample {object} Success-Response:
   *{
        "error": false,
        "message": "Users found",
        "status": 200,
        "data": [
            {
                "userId": "HTRdtiyts",
                "firstName": "titus",
                "lastName": "vimal raj",
                "fullName": "titus vimal raj",
                "email": "titusvimalraj@gmail.com",
                "countryName": "India",
                "mobileNumber": 919094405287,
                "userType": "Admin",
                "createdOn": "2019-09-03T18:32:27.000Z"
            },
            {
                "userId": "EphXhaU6k",
                "firstName": "Clive",
                "lastName": "jenson",
                "fullName": "Clive jenson",
                "email": "clive.jensonk@yahoo.in",
                "countryName": "India",
                "mobileNumber": 919094632593,
                "userType": "User",
                "createdOn": "2019-09-17T14:40:04.000Z"
            },
            {
                "userId": "sXK-TyNfO",
                "firstName": "Test",
                "lastName": "User",
                "fullName": "Test User",
                "email": "titusvimalrajc@gmail.com",
                "countryName": "India",
                "mobileNumber": 9888777788,
                "userType": "Admin",
                "createdOn": "2019-09-28T09:33:57.000Z"
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


    app.get(`${baseUrl}/info/allUsers`, userController.getAllUsers);

}

module.exports = {
    setRouter: setRouter
}
