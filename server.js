const http = require ("http");

const port  = 8081;

http.createServer((req,res)=> {
    res.writeHead(200, {"content-type": "text/html"});
    res.write("<h2> hey server started and you can proceed with it now with nodemon :-> </h2>");
    res.end();
})
.listen(port, ()=> {
    console.log(`Nodejs server started running on port ${port}`)
})