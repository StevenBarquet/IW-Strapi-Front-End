const http = require('http');

const fs = require('fs');
// const path = require('path');

const hostname = '127.0.0.1';
const port = 1337;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('It Works!\n');
});

server.listen(port, hostname, () => {
  // fs.writeFileSync("strapiTest.txt", `Server running at http://${hostname}:${port}/`)
  console.log(`Server running at http://${hostname}:${port}/`);
});
