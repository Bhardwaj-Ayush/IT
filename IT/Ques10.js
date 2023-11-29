const http = require('http');

const port = process.env.PORT || 10000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.end('<h1> RAM RAM ni SARIYAANE hhh</h1>')
})

server.listen(port,()=>{
    console.log('the server is listening on port ${port}')
});