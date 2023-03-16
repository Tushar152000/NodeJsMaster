const fs=require("fs");
//  const ans=fs.readFileSync("read.txt","utf-8");


// console.log(ans);
fs.readFile("read.txt","utf-8",(err)=>{
   console.log("ans");

});
console.log("after the ans");

//asynchronous first read the data which take less time to decode 
