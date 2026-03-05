//Array Map
//let numArray = [100,200,300,400];
let number = [1,2,3];
let square = number.map(num=>num*num);
console.log(square);


//Array map
let prices = [100,200,300,400];
let priceWithGST = prices.map(price => price +price*0.18);
console.log("Price w/o tax:",prices);
console.log("Price with tax:",priceWithGST);

//using map to extract files
let users = [ 
{name:"chethan",age:21},
{name:"kowshik",age:19}
];

let names = users.map(user => user.name);
console.log("",names);
