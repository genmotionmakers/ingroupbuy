'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

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
