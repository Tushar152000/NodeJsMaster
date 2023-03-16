const biodata={
    name:"Tushar Chauhan",
    age:19,
    Occupation:"Software Engineer",

};
// this JSON.stirinify is used to convert the json formate into string 
const jsondata=JSON.stringify(biodata);
//to get back into the object formate we can use json.parse
const objdata=JSON.parse(jsondata);

console.log(objdata);