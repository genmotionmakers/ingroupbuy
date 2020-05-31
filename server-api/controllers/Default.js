'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

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

module.exports.groupsCoordsGET = function groupsCoordsGET (req, res, next) {
  var coords = req.swagger.params['coords'].value;
  Default.groupsCoordsGET(coords)
    .then(function (response) {
      utils.writeJson(res, response);
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
    .then(function (response) {
      utils.writeJson(res, response);
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
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
