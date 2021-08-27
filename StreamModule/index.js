const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt", (err, data) => {
    //     if(err) return console.err;
    //     res.end(data.toString());
    // });

    const rstream = fs.createReadStream("inputs.txt");
    rstream.on('data', (chunkdata) =>{
        res.write(chunkdata);
    });
    rstream.on('end', () =>{
        res.end();
    });
    rstream.on("error", (err) =>{
        console.log(err);
        res.end("file not found");
    });
});

server.listen(3000,"127.0.0.1");