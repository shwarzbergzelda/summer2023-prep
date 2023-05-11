const http = require('http');
const app = require('./app');

const port = 8000;

app.set('port', port);
const server = http.createServer(app); // directs all API management to app.js

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});