const http = require('http');
const fsPromises = require("fs/promises");

const app = http.createServer(async (req, res)=>{
        // console.log(Object.keys(req));
        // res.write("welcome!!");
        // res.setHeader("Content-type", "text/plain");
        const route = (req.url);
        switch (req.url) {
        case '/':
            res.end("HomePage");
            break;
        case '/about':
             res.end("I am Sangam Gupta");
            break;
            default:
            res.statusCode = 404;
            res.end("404 Not Found");
        }

        res.writeHead(200,{
            "Content-type": "text/html",
        });
        const stream = await fsPromises.readFile('./homepage.html');
        res.end(stream);
});
// https://localhost:3000
app.listen(3000, ()=>{
    console.log("-------Server Started------");
});









// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: New Req Received\n`;

//     fs.appendFile("index.html", log, (err) => {
//         if (err) {
//             console.error("Error:", err);
//         }

//         switch (req.url) {
//             case '/':
//                 res.end("HomePage");
//                 break;
//             case '/about':
//                 res.end("I am Sangam Gupta");
//                 break;
//             default:
//                 res.statusCode = 404;
//                 res.end("404 Not Found");
//         }
//     });
// });

// myServer.listen(3000, () => console.log('Server Started'));


