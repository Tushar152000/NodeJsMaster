//events module 
//where you can create .fire,listen .
const EventEmitter=require("events");
const event=new EventEmitter();
// there fore we can create are own event and then fire
//  create an event emiiter instance and register 
// event.on("sayMyName",()=>{
//     console.log("my name is Tushar Chauhan");

// });
// Here we can call the emit many times
event.on('checkPage',(sc,msg)=>{
    console.log("status code is ${sc} and the page is ${msg}");

});
//emit should be Written after the work

event.emit('checkPage',200,'ok');
