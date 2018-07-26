var http = require('http');
dddd
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World from you');
    response.write('new test');
    response.end();
}

http.createServer(onRequest).listen(8000);


ben ben ben
test tttttttt
