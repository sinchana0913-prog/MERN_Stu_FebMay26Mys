// Basics of Objects
const person = {
    name:"sinchana",
    age:21,
    isStudent: false
};
//console.log("person",person);
console.log("Name:",person.name);
console.log("Name:",person["age"]);

//Add a new property
person.city = "Mysore";
console.log("person",person);
//Modify
person.age = 31;
//delete
delete person.isStudent;
console.log("person",person);

//Object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year =  2026;
console.log("car:",car);


