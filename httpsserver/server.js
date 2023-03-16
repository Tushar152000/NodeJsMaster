const fs=require('fs');
const http=require("http");

const server =http.createServer((req,res)=>{
    // console.log(req.url); this url help to give the 

    //req is used to get the get infortion 
    //res object is used to send the response for a current req
    if(req.url=='/about'){
    res.end("hello from the server");
    }
    else if(req.url=='/contact'){
        res.end("hello from the contact Page");

    }
    
    else if (req.url == "/userApi") {
        fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
            console.log(data);
        });
        res.end("hello from the UserApi Page");
    }
    

   else{
    res.writeHead(404);
    res.end(" <h1>Page Does'nt Exist </h1>");

   }

});
// how to check wheather the request has be  en send or not
server.listen(3000,"127.0.0.1",()=>{
    console.log("listening from the server 3000");

});
//full form of json=javascript object notation
// lightweight format for sorting and transporting the data

