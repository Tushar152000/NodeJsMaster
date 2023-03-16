
//   var fs = require("fs");
//   fs.readFile("input.txt", (err, data) => {
//     if (err) return console.error("error");
//     res.end(data.toString());
//   });


// server.listen(8000, "127.0.0.1");
// this is not the correct way of streaming 
 // now the second way of streaming is 

 const fs = require("fs");
  const http = require("http");
 const server = http.createServer();
server.on("request", (req, res) => {
//   const stream = fs.createReadStream("input.txt");
//   stream.on("data", (chunkdata) => { // we just read the data chunk by chunk 

//     res.write(chunkdata);
//   });
//   stream.on("end", () => {
//     res.end();  // here we write or the data to the user 
//   });
//   stream.on("error",(err)=>{
//     console.log(err);
//     res.end("file not found");
//   })
 

// now the third way to read and write the stream with the using of stream.pipe
 const stream=fs.createReadStream("input.txt");
 stream.pipe(res);
 
});

server.listen(8000, "127.0.0.1");
