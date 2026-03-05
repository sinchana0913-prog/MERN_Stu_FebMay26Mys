//Array Basics
console.log("Array Basics");
//creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using Constructor
let fruits = new Array("apple","mango");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//push function:add

fruits.push("orange");
console.log(fruits);

//pop function : remove
fruits.pop();

//unshift:adds to beginning
fruits.unshift("cherry");
console.log(fruits);

//shift :remove from the beginning
fruits.shift();
console.log(fruits);
