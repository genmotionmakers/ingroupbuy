'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');
const mongoose = require('mongoose');
const userSchema = require('../models/users.model');
const User = mongoose.model('user', userSchema, 'user');
const groupSchema = require('../models/groups.model');
const Group = mongoose.model('group', groupSchema, 'group');


module.exports.calendarEventGET = function calendarEventGET (req, res, next) {
  Default.calendarEventGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calendarEventIdGET = function calendarEventIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.calendarEventIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calendarEventIdPUT = function calendarEventIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Default.calendarEventIdPUT(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.calendarEventPOST = function calendarEventPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.calendarEventPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.enviosCalcularprecioGET = function enviosCalcularprecioGET (req, res, next) {
  var calcularpreciodata = req.swagger.params['calcularpreciodata'].value;
  Default.enviosCalcularprecioGET(calcularpreciodata)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsDeleteIdPUT = function eventsDeleteIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.eventsDeleteIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsProvider_pollPOST = function eventsProvider_pollPOST (req, res, next) {
  var provider_poll_data = req.swagger.params['provider_poll_data'].value;
  Default.eventsProvider_pollPOST(provider_poll_data)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsReprogramPUT = function eventsReprogramPUT (req, res, next) {
  var reprogrambody = req.swagger.params['reprogrambody'].value;
  Default.eventsReprogramPUT(reprogrambody)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsUpcomingUidGET = function eventsUpcomingUidGET (req, res, next) {
  var uid = req.swagger.params['uid'].value;
  Default.eventsUpcomingUidGET(uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupJoinGET = function groupJoinGET (req, res, next) {
  Default.groupJoinGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupJoinIdGET = function groupJoinIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.groupJoinIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupJoinPOST = function groupJoinPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.groupJoinPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.groupsApproveUidGidGET = function groupsApproveUidGidGET (req, res, next) {
  var uid = req.swagger.params['uid'].value;
  var gid = req.swagger.params['gid'].value;
  Default.groupsApproveUidGidGET(uid,gid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/*
* Get distance from coordinates 
* decimal latitude and longitude in meters
*/
function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  d = d * 1000;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

module.exports.groupsCoordsGET = function groupsCoordsGET (req, res, next) {
  var coords = req.swagger.params['coords'].value;
  Default.groupsCoordsGET(coords)
    .then(async function (response) {
      let groups = await Group.find();
      let groups_res = [];
      //validate input  (long > -180 && long < 180) AND (lat > -90 && lat < 90)
      const coords_data = coords.split(',');
      const lat = coords_data[0];
      const long = coords_data[1];
      const limit = 2;
      const min_distance = 5000;
      

      if((long > -180 && long < 180) && (lat > -90 && lat < 90)){
         groups_res = groups.map(function(group, index){
            let coords_data_store = group.coords.split(',');
            let distance = getDistance(lat,long,coords_data_store[0],coords_data_store[1]);
            if(index < limit && distance < min_distance){
              return group;
            }    
                  
          });
        }

      utils.writeJson(res, groups_res);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.productsProviderGET = function productsProviderGET (req, res, next) {
  var provider = req.swagger.params['provider'].value;
  Default.productsProviderGET(provider)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.providersGET = function providersGET (req, res, next) {
  Default.providersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.purchasesItemDELETE = function purchasesItemDELETE (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.purchasesItemDELETE(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.purchasesItemPOST = function purchasesItemPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.purchasesItemPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.purchasesPOST = function purchasesPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.purchasesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userEditIdPUT = function userEditIdPUT (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.userEditIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGET = function userGET (req, res, next) {
  Default.userGET()
    .then(async function (response) {
      let users = await User.find();
      utils.writeJson(res, users);
      //utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.userIdGET = function userIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.userIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userSigninPOST = function userSigninPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.userSigninPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userSignupPOST = function userSignupPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  
  Default.userSignupPOST(body)
    .then(async function (response) {     
      let users = await User.create(
        {
          email: 'mail@mail.com',
          password: '12345' 
        }
      ); 
      utils.writeJson(res, {
        hello: "world"
      });
      //utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
