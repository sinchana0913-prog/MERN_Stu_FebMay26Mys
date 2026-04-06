//This file creates and exports a custom EventEmitter instance

const EventEmitter = require("events");

//custom eventemitter object
const bookingEmitter = new EventEmitter();

module.exports = bookingEmitter;