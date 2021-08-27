const http = require("http");
const fs = require("fs");

 const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == "/") {
        res.end("hello from the home side");
    } else if (req.url == "/about") {
        res.end("hello from the AboutUs side");
    } else if (req.url == "/contact") {
        res.end("hello from the ContactUs side");
    }  else if (req.url == "/userapi") {
        fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
            console.log(data);
            res.end(data);
        });
        res.end("hello from the userAPI side");
    } else { 
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1>404 error page. Page doesn't exist</h1>");
    }
});
    // res.end("hello from the others side");


server.listen(8000, "127.0.0.1", () =>{
    console.log("listening to the port no 8000");
});