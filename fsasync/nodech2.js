const fs= require("fs");
// fs.mkdir("tushar",(err)=>{
//     console.log("folder is Created");

// });
// fs.writeFile("./tushar/bio.txt","my name is Tushar Chauhan",(err)=>{
//     console.log("file is Created");
// });
// fs.appendFile("./tushar/bio.txt","plz like and share ",(err)=>{
//     console.log("data has been appended");

// });

// fs.readFile("./tushar/bio.txt",(err,ans)=>{
//     console.log(ans);

// });

// so utf-8 is used to covert the buffer data into string 
// fs.rename("./tushar/bio.txt","./tushar/mybio.txt",(err)=>{
//     console.log("rename done");

// })
// fs.unlink("./tushar/mybio.txt",(err)=>{
//     console.log("deleted");

// })
fs.rmdir("./tushar",(err)=>{
    console.log("folder deletd");
    
})

