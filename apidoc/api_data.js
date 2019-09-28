define({ "api": [
  {
    "group": "events",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/events/:userId/all",
    "title": "api for Getting all Events of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (path variables) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Events fetched successfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"color\": {\n                \"primary\": \"#80ff80\",\n                \"secondary\": \"#ff80ff\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T06:30:00.000Z\",\n            \"end\": \"2019-10-01T06:30:00.000Z\",\n            \"title\": \"First Event\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": true,\n            \"draggable\": false,\n            \"eventId\": \"jsgKWsu7k\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:44:23.052Z\",\n            \"reminder\": true\n        },\n        {\n            \"color\": {\n                \"primary\": \"#80ff80\",\n                \"secondary\": \"#ff5959\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T10:30:00.000Z\",\n            \"end\": \"2019-09-30T14:30:00.000Z\",\n            \"title\": \"Second Event\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": false,\n            \"draggable\": false,\n            \"eventId\": \"-amJZcMx_\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:44:56.452Z\",\n            \"reminder\": true\n        },\n        {\n            \"color\": {\n                \"primary\": \"#ff5959\",\n                \"secondary\": \"#ff5959\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T06:30:00.000Z\",\n            \"end\": \"2019-10-01T06:30:00.000Z\",\n            \"title\": \"Third EVENT\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": null,\n            \"draggable\": false,\n            \"eventId\": \"4zPlqiBH2\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:45:29.972Z\",\n            \"reminder\": true\n        },\n        {\n            \"color\": {\n                \"primary\": \"#80ffff\",\n                \"secondary\": \"#ff80ff\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T06:30:00.000Z\",\n            \"end\": \"2019-10-03T06:30:00.000Z\",\n            \"title\": \"Fourth Event\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": true,\n            \"draggable\": false,\n            \"eventId\": \"BdPypmf0k\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:53:24.047Z\",\n            \"reminder\": true\n        },\n        {\n            \"color\": {\n                \"primary\": \"#ffff80\",\n                \"secondary\": \"#ff80c0\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T06:30:00.000Z\",\n            \"end\": \"2019-09-30T06:30:00.000Z\",\n            \"title\": \"Fifth Event\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": true,\n            \"draggable\": false,\n            \"eventId\": \"JGJcrHi-4\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:59:57.396Z\",\n            \"reminder\": true\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Route not found in the application || Internal serever error\",\n      \"status\": \"500 || 404\",\n      \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/events.js",
    "groupTitle": "events",
    "name": "GetApiV1EventsUseridAll"
  },
  {
    "group": "events",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/events/:userId/all",
    "title": "api for Getting Events Associated or created by an admin.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (path variables) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n  {\n    \"error\": false,\n    \"message\": \"events Associated with the Admin fetched successfully\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"color\": {\n                \"primary\": \"#80ff80\",\n                \"secondary\": \"#ff5959\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T10:30:00.000Z\",\n            \"end\": \"2019-09-30T14:30:00.000Z\",\n            \"title\": \"Second Event Title Edited\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": false,\n            \"draggable\": false,\n            \"eventId\": \"-amJZcMx_\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:44:56.452Z\",\n            \"reminder\": true\n        },\n        {\n            \"color\": {\n                \"primary\": \"#ff5959\",\n                \"secondary\": \"#ff5959\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T06:30:00.000Z\",\n            \"end\": \"2019-10-01T06:30:00.000Z\",\n            \"title\": \"Third EVENT\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": null,\n            \"draggable\": false,\n            \"eventId\": \"4zPlqiBH2\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:45:29.972Z\",\n            \"reminder\": true\n        },\n        {\n            \"color\": {\n                \"primary\": \"#80ffff\",\n                \"secondary\": \"#ff80ff\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T06:30:00.000Z\",\n            \"end\": \"2019-10-03T06:30:00.000Z\",\n            \"title\": \"Fourth Event\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": true,\n            \"draggable\": false,\n            \"eventId\": \"BdPypmf0k\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:53:24.047Z\",\n            \"reminder\": true\n        },\n        {\n            \"color\": {\n                \"primary\": \"#ffff80\",\n                \"secondary\": \"#ff80c0\"\n            },\n            \"resizable\": {\n                \"beforeStart\": false,\n                \"afterEnd\": false\n            },\n            \"start\": \"2019-09-29T06:30:00.000Z\",\n            \"end\": \"2019-09-30T06:30:00.000Z\",\n            \"title\": \"Fifth Event\",\n            \"actions\": [\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n                },\n                {\n                    \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n                }\n            ],\n            \"allDay\": true,\n            \"draggable\": false,\n            \"eventId\": \"JGJcrHi-4\",\n            \"userId\": \"HTRdtiyts\",\n            \"adminId\": \"HTRdtiyts\",\n            \"adminName\": \"titus vimal raj\",\n            \"createdOn\": \"2019-09-28T09:59:57.396Z\",\n            \"reminder\": true\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Route not found in the application || Internal serever error\",\n      \"status\": \"500 || 404\",\n      \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/events.js",
    "groupTitle": "events",
    "name": "GetApiV1EventsUseridAll"
  },
  {
    "group": "events",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/:eventId/delete",
    "title": "api for deleting an Event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventId",
            "description": "<p>of an Event. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (path variables) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n \"error\": false,\n \"message\": \"deleted event First Event sucessfully\",\n \"status\": 200,\n \"data\": {\n           \"color\": {\n               \"primary\": \"#80ff80\",\n               \"secondary\": \"#ff80ff\"\n           },\n           \"resizable\": {\n               \"beforeStart\": false,\n               \"afterEnd\": false\n           },\n           \"start\": \"2019-09-29T06:30:00.000Z\",\n           \"end\": \"2019-10-01T06:30:00.000Z\",\n           \"title\": \"First Event\",\n           \"actions\": [\n               {\n                   \"label\": \"<i class=\\\"fa fa-fw fa-pencil\\\"></i>\"\n               },\n               {\n                   \"label\": \"<i class=\\\"fa fa-fw fa-times\\\"></i>\"\n               }\n           ],\n           \"allDay\": true,\n           \"draggable\": false,\n           \"_id\": \"5d8f2b77d5ce1035a4a10cbe\",\n           \"eventId\": \"jsgKWsu7k\",\n           \"userId\": \"HTRdtiyts\",\n           \"adminId\": \"HTRdtiyts\",\n           \"adminName\": \"titus vimal raj\",\n           \"createdOn\": \"2019-09-28T09:44:23.052Z\",\n           \"reminder\": true,\n           \"__v\": 0\n       }\n  }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Route not found in the application || Internal serever error\",\n      \"status\": \"500 || 404\",\n      \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/events.js",
    "groupTitle": "events",
    "name": "PostApiV1EventsEventidDelete"
  },
  {
    "group": "events",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/events/:eventId/edit",
    "title": "api for editing an Event.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "eventId",
            "description": "<p>of an Event. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (path variables) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n  {\n    \"error\": false,\n    \"message\": \"Event found and updated sucessfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n      \"error\": true,\n      \"message\": \"Route not found in the application || Internal serever error\",\n      \"status\": \"500 || 404\",\n      \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/events.js",
    "groupTitle": "events",
    "name": "PostApiV1EventsEventidEdit"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/info/allUsers",
    "title": "api to all users Information .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Users found\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"userId\": \"HTRdtiyts\",\n                \"firstName\": \"titus\",\n                \"lastName\": \"vimal raj\",\n                \"fullName\": \"titus vimal raj\",\n                \"email\": \"titusvimalraj@gmail.com\",\n                \"countryName\": \"India\",\n                \"mobileNumber\": 919094405287,\n                \"userType\": \"Admin\",\n                \"createdOn\": \"2019-09-03T18:32:27.000Z\"\n            },\n            {\n                \"userId\": \"EphXhaU6k\",\n                \"firstName\": \"Clive\",\n                \"lastName\": \"jenson\",\n                \"fullName\": \"Clive jenson\",\n                \"email\": \"clive.jensonk@yahoo.in\",\n                \"countryName\": \"India\",\n                \"mobileNumber\": 919094632593,\n                \"userType\": \"User\",\n                \"createdOn\": \"2019-09-17T14:40:04.000Z\"\n            },\n            {\n                \"userId\": \"sXK-TyNfO\",\n                \"firstName\": \"Test\",\n                \"lastName\": \"User\",\n                \"fullName\": \"Test User\",\n                \"email\": \"titusvimalrajc@gmail.com\",\n                \"countryName\": \"India\",\n                \"mobileNumber\": 9888777788,\n                \"userType\": \"Admin\",\n                \"createdOn\": \"2019-09-28T09:33:57.000Z\"\n            }\n        ]\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersInfoAllusers"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/:userId/info",
    "title": "api to get an user Information .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"User found\",\n        \"status\": 200,\n        \"data\": {\n            \"userId\": \"HTRdtiyts\",\n            \"firstName\": \"titus\",\n            \"lastName\": \"vimal raj\",\n            \"fullName\": \"titus vimal raj\",\n            \"email\": \"titusvimalraj@gmail.com\",\n            \"countryName\": \"India\",\n            \"mobileNumber\": 919094405287,\n            \"userType\": \"Admin\",\n            \"createdOn\": \"2019-09-03T18:32:27.000Z\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UsersUseridInfo"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"login successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6ImdJMDN2S3ZKdSIsImlhdCI6MTU2OTY2MjgwNzA1NSwiZXhwIjoxNTY5NzQ5MjA3LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJpc3N1ZVRyYWNraW5nVG9vbCIsImRhdGEiOnsidXNlcklkIjoiSFRSZHRpeXRzIiwiZmlyc3ROYW1lIjoidGl0dXMiLCJsYXN0TmFtZSI6InZpbWFsIHJhaiIsImZ1bGxOYW1lIjoidGl0dXMgdmltYWwgcmFqIiwiZW1haWwiOiJ0aXR1c3ZpbWFscmFqQGdtYWlsLmNvbSIsImNvdW50cnlOYW1lIjoiSW5kaWEiLCJtb2JpbGVOdW1iZXIiOjkxOTA5NDQwNTI4NywidXNlclR5cGUiOiJBZG1pbiIsInNlY3JldEtleSI6Im1lZXRpbmdQbGFubmVyRWR3aXNvciJ9fQ.B9mB3qkpsvXmRd2czkOZuri9rCzeA7R5lEwBhqMHO4Y\",\n        \"userDetails\": {\n            \"userId\": \"HTRdtiyts\",\n            \"firstName\": \"titus\",\n            \"lastName\": \"vimal raj\",\n            \"fullName\": \"titus vimal raj\",\n            \"email\": \"titusvimalraj@gmail.com\",\n            \"countryName\": \"India\",\n            \"mobileNumber\": 98889888898,\n            \"userType\": \"Admin\"\n                }\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "api for user to log out of the application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n        \"error\": false,\n        \"message\": \"Logged Out Successfully\",\n        \"status\": 200,\n        \"data\": null\n    }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/reset",
    "title": "api for user to send email for reset password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n          \"error\": false,\n          \"message\": \"password reset successful !\",\n          \"status\": 200,\n          \"data\": {\n              \"userId\": \"KEIWO398d\",\n              \"email\": \"titusvimalraj@gmail.com\"\n          }\n      }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersReset"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/sendemail",
    "title": "api for user to send email for reset password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ClientUrl",
            "description": "<p>. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"reset password link sent successfully ! check your inbox\",\n            \"status\": 200,\n            \"data\": {\n                \"accepted\": [\n                    \"vimalraj@gmail.com\n                ],\n                \"rejected\": [],\n                \"envelopeTime\": 1039,\n                \"messageTime\": 1017,\n                \"messageSize\": 389,\n                \"response\": \"250 2.0.0 OK  1559344676 x18sm8075150pfo.8 - gsmtp\",\n                \"envelope\": {\n                    \"from\": \"titusvimalraj@gmail.com\",\n                    \"to\": [\n                        \"vimalraj@gmail.com\"\n                    ]\n                },\n                \"messageId\": \"<0114b13d-0f87-af2c-cc5c-56a5fe5hj581@gmail.com>\"\n            }\n        }",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSendemail"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>of the user (body Param) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userType",
            "description": "<p>(Admin||User) of the user (body Param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Signed up successfully !\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"sXK-TyNfO\",\n        \"firstName\": \"Test\",\n        \"lastName\": \"User\",\n        \"fullName\": \"Test User\",\n        \"email\": \"titusvimalrajc@gmail.com\",\n        \"countryName\": \"India\",\n        \"mobileNumber\": 919888777788,\n        \"userType\": \"Admin\",\n        \"createdOn\": \"2019-09-28T09:33:57.000Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Route not found in the application || Internal serever error\",\n     \"status\": \"500 || 404\",\n     \"data\" : \"null\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
