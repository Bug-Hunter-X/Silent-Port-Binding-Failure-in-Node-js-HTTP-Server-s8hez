const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello, World!' }));
};

const server = http.createServer(requestListener);

// Handle port binding errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port 8080 is already in use. Please choose a different port or stop the existing server.`);
    process.exit(1); // Exit with an error code
  } else {
    console.error(`Server error:`, err);
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});