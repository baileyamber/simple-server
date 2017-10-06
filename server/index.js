// process.env.NODE_URL = 'XXX.XXX.XXX.XXX'; // defaults to '127.0.0.1' or 'localhost'
// process.env.NODE_PORT = 6085;  // defaults to 6085

require('mahrio').runServer( process.env, __dirname )
  .then( function(server){
    
    // Define User Interface through a Web View
    server.route({
      method: 'GET',
      path: '/',
      handler: function( request, reply ) {
        reply.view( 'index' );
      }
    });
    
    // Define an API endpoint
    server.route({
      method: 'POST',
      path: '/api/monitor/:val',
      handler: function( request, reply ) {
        console.log( request.params );
        console.log( request.queryParams );
        reply('OK');
      }
    });
  });