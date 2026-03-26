// sending response in json format
const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/api/status" && req.method === "GET") {
        const responseData = {
            success: true,
            message: "API is working",
            server: "NodeJS HTTP Module"
        };
        //JSON responses using application/json
        res.writeHead(200,{"Content-Type":"application/json"});
        //json.stringify() converts JS objects into a JSON string
        res.end(JSON.stringify(responseData));
        return;
    }
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({success:false,messsage:"Route not found."}));
});
server.listen(3001,function(){
    console.log("server is runinng at http://localhost:3001");

});