// Generated by CoffeeScript 1.10.0

/* server.js */

(function() {
  var eurecaServer, eurecaio;

  eurecaio = require('eureca.io');

  eurecaServer = new eurecaio.Server({
    allow: ['hand']
  });

  eurecaServer.attach(require('./app').server);

  eurecaServer.onConnect(function(connection) {
    console.log("Connected with " + connection.id);
    return eurecaServer.getClient(connection.id).offer('hand');
  });

}).call(this);