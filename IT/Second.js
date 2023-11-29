const Info = {
    Name :'Ayush Bhardwaj',
    Age : 21,
    Gender : 'Male',
    Major : 'CS',
    Developer : true,

}

module.exports = Info;


const http = require('http');

const port = process.env.PORT || 10000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Jai shree Ram</h1>') 
})

server.listen(port, ()=>{

    console.log('server is Listining on port ${port} ');
});