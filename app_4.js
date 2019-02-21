var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"header" : "header1", "Content-Type" : "text/plain"});
    response.end("hello yoyo sundar\n");
    console.log(response);
}).listen(3000, "localhost");