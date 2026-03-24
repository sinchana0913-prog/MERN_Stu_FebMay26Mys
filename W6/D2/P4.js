//Using the EventEmitter class
const EventEmitter = require("events");


//create a new event emitter instance
//This object can publish events and allow listeners to subscribe
const orderEmitter = new EventEmitter();

//Register a listener for the "orderPlaced" event.
//whenever the event is emitted,the function will execute
//once() registers a listener that automatically removes itself 
//after running for the first time
orderEmitter.once("OrderPlaced",function(orderId,name,orderValue){
    console.log("bill amount:",orderValue);
    console.log("waiting for Resturant to accept order. ",orderId);
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Resturant accepted order. ",orderId);
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Assigning delivery partner.");
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Ramesh is deliverying your order.",orderId);
});

//emit the event with extra data
//The listener will receive the orderId value.
orderEmitter.emit("OrderPlaced","ORD-2403001","sinchana",10000);
orderEmitter.emit("OrderPlaced","ORD-2403001","sinchana",10000);

