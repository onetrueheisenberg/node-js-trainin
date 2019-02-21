var fs = require("fs");
var http = require("http");

var name = 
                {
                    firstname : "yoyo",
                    lastname : "yoyo"
                }

http.createServer(function(request, response) 
{
    if(request.url === "/")
    {
        response.writeHead(200, {"header" : "header1", "Content-Type" : "text/html"});
        fs.createReadStream(__dirname + "/index.htm", "utf8").pipe(response);
    }
    else if(request.url === "/api")
    {
        response.writeHead(200, {"header" : "header1", "Content-Type" : "application/json"})
        var readable = fs.createReadStream(__dirname + "/index.htm", "utf8");
        response.end(JSON.stringify(name));
    }
    else
    {
        response.writeHead(404);
        response.end();
    }
}).listen(3000, "localhost");