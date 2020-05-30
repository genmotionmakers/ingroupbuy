'use strict';


/**
 * Retorna los grupos de compras de acuerdo con las coordenadas recibidas.
 *
 * coords String Coordenadas a buscar.
 * returns Group
 **/
exports.groupsCoordsGET = function(coords) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "distance" : 6,
  "name" : "name",
  "id" : 0,
  "coords" : "coords"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

