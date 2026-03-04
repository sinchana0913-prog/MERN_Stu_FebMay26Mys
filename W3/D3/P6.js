// Nested Objects and Method
const student = {
    firstName:"sanajana",
    lastName:"Nayak",
    scores:{
        math:98,
        science:89,
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstName + " "+this.lastName;
    },
    greet(){
        console.log("Hi ",this.fullname());
    }
};
console.log(student.fullname());
console.log(student.scores.math);
console.log(student.scores.science);
console.log(student.hobbies);