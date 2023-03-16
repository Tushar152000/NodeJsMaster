const fs=require('fs');
// fs.writeFileSync("read.txt","Welcome to the macbook");
// const fs=require('fs');
// fs.writeFileSync("read.txt","Welcome to the macbook air 1");
//write file sync overwrite the data


// fs.appendFileSync("read.txt","  Having m1 chip ");
// How to read  the file 
// fs.readFileSync("read.txt");
const data=fs.readFileSync("read.txt");
console.log(data);
//In node.js we have the additional data type which is called buffer which is used to store the binary data

fs.renameSync("read.txt","readwrite.txt");
