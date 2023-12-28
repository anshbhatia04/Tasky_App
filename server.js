const http = require("http");

const port = 2703;

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h2>hey server started:-) </h2>");
    res.end();
})
.listen(port, ()=>{
    console.log("NodeJs Server Started Running on Port: ${port}");
})

// http://localhost:2703