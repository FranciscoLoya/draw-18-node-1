const http = require('http');
const fs = require('fs');
var log4js = require('log4js');

//aquí no existen métodos, aquí todos son funciones//
//funcion anónima//
var logger = log4js.getLogger();
logger.level = 'debug';
http.createServer(function(request, response){
  fs.readFile('./index.html', function(perrito, gatito){
    logger.info("Coneccion a la aplicacion");
    if (perrito) {

      response.writeHead(404, {
        'Content-Type':'text/html'
      });
      response.write('404 - not found');
      response.end();
    }else {
      response.write(gatito);
      response.end();
    }
  });
}).listen(3000);

/*let server = function(){

//};
//http.createServer();




//http.createServer(function(){

});*/
