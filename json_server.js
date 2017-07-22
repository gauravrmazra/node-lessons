var http = require("http");

function process_request(req, res) {
  console.log("INCOMING REQUEST: METHOD: " + req.method + " and URL: " + req.url);
  res.writeHead(200, {"Content-Type" : "application/json"});
  res.end(JSON.stringify({error: null, data: {}}));
}

var json_server = http.createServer(process_request);
json_server.listen(8080);
