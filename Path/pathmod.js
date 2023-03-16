const path=require("path");
console.log(path.dirname("/Users/tusharchauhan/Desktop/NodejsMaster/Path"));
console.log(path.extname("/Users/tusharchauhan/Desktop/NodejsMaster/Path"));
//if you want to get the base name
console.log(path.basename("/Users/tusharchauhan/Desktop/NodejsMaster/Path"));
console.log(path.isAbsolute("/Users/tusharchauhan/Desktop/NodejsMaster/Path"));
const mypath=path.parse("/Users/tusharchauhan/Desktop/NodejsMaster/Path");
  console.log(mypath.root);
