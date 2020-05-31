'use strict';


/**
 * Lista de eventos
 * Obtiene una lista de eventos de decompra
 *
 * returns Event
 **/
exports.calendarEventGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "fecha",
  "group_id" : "group_id",
  "user_id" : "user_id",
  "description" : "description",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Evento de compra
 * Registrar evendo de decompra
 *
 * id String Busca un evento por id
 * returns Event
 **/
exports.calendarEventIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "fecha",
  "group_id" : "group_id",
  "user_id" : "user_id",
  "description" : "description",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Evento de compra
 * Registrar evendo de decompra
 *
 * id String Busca un evento por id
 * body Event Objeto para editar un evento
 * returns Event
 **/
exports.calendarEventIdPUT = function(id,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "fecha",
  "group_id" : "group_id",
  "user_id" : "user_id",
  "description" : "description",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Evento de compra
 * Registrar evendo de decompra
 *
 * body Event Objeto para crear evento
 * returns Event
 **/
exports.calendarEventPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "fecha" : "fecha",
  "group_id" : "group_id",
  "user_id" : "user_id",
  "description" : "description",
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Calcula el precio del envio a partir del peso y dimensiones
 *
 * calcularpreciodata CalcularPrecioBody Body de calcularprecio
 * returns CalcularPrecioData
 **/
exports.enviosCalcularprecioGET = function(calcularpreciodata) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "price" : "price",
  "currency" : "currency"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Disolver evento de compra
 * Se edita el campo visible del registro establecido
 *
 * id Integer Objeto evento de compra
 * returns inline_response_200_2
 **/
exports.eventsDeleteIdPUT = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "El registro ha sido eliminado."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Servicio para seleccionar los proveedores de la compra.
 *
 * provider_poll_data ProviderPollData Poll ID.
 * returns inline_response_200_1
 **/
exports.eventsProvider_pollPOST = function(provider_poll_data) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "El usuario ha votado correctamente por el proveedor."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Reprogramar evento de compra
 * Se edita la fecha del evento establecido
 *
 * reprogrambody ReprogramBody Objeto evento de compra
 * returns inline_response_200_3
 **/
exports.eventsReprogramPUT = function(reprogrambody) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "El registro ha sido actualizado."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna los grupos de compras de acuerdo con las coordenadas recibidas.
 *
 * uid String Id del usuario.
 * returns Events
 **/
exports.eventsUpcomingUidGET = function(uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "date",
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista de usuarios asociados a un grupo
 * Obtiene una lista de usuarios asignados a un grupo
 *
 * returns RequestShoppingGroup
 **/
exports.groupJoinGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "group_id" : "group_id",
  "user_id" : "user_id",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna los grupos de compras de acuerdo con las coordenadas recibidas.
 *
 * id String Id del grupo.
 * returns RequestShoppingGroup
 **/
exports.groupJoinIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "group_id" : "group_id",
  "user_id" : "user_id",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Solicitud unirse a un grupo
 * Envia una solicitud para unirse a un grupo de compra
 *
 * body RequestShoppingGroup Objeto crear la solicitud
 * returns RequestShoppingGroup
 **/
exports.groupJoinPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "group_id" : "group_id",
  "user_id" : "user_id",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Aprobar la solicitud de admisión de un usuario al grupo de compras.
 *
 * uid String User ID.
 * gid String Group ID.
 * returns inline_response_200
 **/
exports.groupsApproveUidGidGET = function(uid,gid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "Se admite al usuario en el grupo establecido"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


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


/**
 * Lista de productos
 * Obtiene un listado de productos registrados por proveedor
 *
 * provider Integer Id del proveedor.
 * returns Products
 **/
exports.productsProviderGET = function(provider) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image" : "image",
  "unit" : "unit",
  "ppu" : "ppu",
  "name" : "name",
  "currency" : "currency",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista de proveedores
 * Obtiene un listado de proveedores registrados
 *
 * returns Providers
 **/
exports.providersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0,
  "brand_logo" : "brand_logo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Eliminar item de compra
 * Se elimina un item de una compra
 *
 * body RequestItemDeleteBody RequestItemDeleteBody
 * returns inline_response_200_5
 **/
exports.purchasesItemDELETE = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "Se ha eliminado el item de la compra"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registrar item de compra
 * Se registra un item a una compra
 *
 * body RequestItemPurchasesBody RequestItemPurchasesBody
 * returns inline_response_200_4
 **/
exports.purchasesItemPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "response" : "Se ha añadido el item a la compra"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registrar compra
 * Se registra una compra que contiene muchos items
 *
 * body RequestPurchasesBody RequestPurchasesBody
 * returns RequestPurchasesResponse
 **/
exports.purchasesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Actualizar usuario
 * Edición de la información de usuario
 *
 * id Integer Objeto para editar usuario
 * returns User
 **/
exports.userEditIdPUT = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "latitud" : 0,
  "longitud" : 6,
  "phone" : "phone",
  "name" : "name",
  "id" : "id",
  "email" : "email",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista usuarios
 * Obtiene un listado de usuarios registrados
 *
 * returns User
 **/
exports.userGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "latitud" : 0,
  "longitud" : 6,
  "phone" : "phone",
  "name" : "name",
  "id" : "id",
  "email" : "email",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Usuario por Id
 * Obtiene un usuario por id
 *
 * id Integer Objeto un usuario por Id
 * returns User
 **/
exports.userIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "latitud" : 0,
  "longitud" : 6,
  "phone" : "phone",
  "name" : "name",
  "id" : "id",
  "email" : "email",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Inicio de sesión
 * Iniciar sesión en la plataforma
 *
 * body Login Objeto para inicio de sesión
 * returns LoginResponse
 **/
exports.userSigninPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "pass12345",
  "email" : "pepito@email.com",
  "token" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registro usuario
 * Registro de usuarios para poder unirse a grupos de compras
 *
 * body User Objeto para crear usuario
 * returns User
 **/
exports.userSignupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "latitud" : 0,
  "longitud" : 6,
  "phone" : "phone",
  "name" : "name",
  "id" : "id",
  "email" : "email",
  "lastname" : "lastname"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

