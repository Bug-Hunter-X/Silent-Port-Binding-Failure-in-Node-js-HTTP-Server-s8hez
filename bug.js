const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon Bug:  The server might fail silently if there's a problem binding to the port (e.g., port already in use).
//This is an uncommon bug because the error is not explicitly thrown, making it hard to debug.
//This is more likely to happen when running multiple node processes using the same port.