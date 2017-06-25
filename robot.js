var http = require('http');
var robot = require('./robotmodule.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(robot.Action());
}).listen(1234);
