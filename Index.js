
const port = 8000;
const hostname = "0.0.0.0";

const http = require('http');
const fs = require('fs');


const express = require('Express');
const app = express();


// const server = http.createServer((req, res) => {
//     res.end('Server Is Started');
// })

const hehe = express.urlencoded(
    // {extended: true}
);
app.use(hehe);
app.get('/', (req,res)=> {

    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync('html.html'));

})
app.post('/', (req, res)=>{

    console.log(req.body);
    res.end(`${req.body.name}, i welcome you to my webpage`);

})
app.get('/hello', (req,res)=> {

    res.end('you requested hello.html');

})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
  })
