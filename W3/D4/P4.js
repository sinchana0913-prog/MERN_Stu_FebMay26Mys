//Filter method
let marks = [75,49,56,70,82,52,68];
let passed = marks.filter(mark => mark >= 70);
console.log(marks);
console.log(passed);

let students = [ 
{name:"chethan",score:75},
{name:"kowshik",score:70},
{name:"sinchana",score:82},
{name:"sanjana",score:68},
{name:"aishu", score:49},
{name:"ananya",score:68},
{name:"sanjay",score:52},
];
let qualifiedStudents = students.filter(s => s.score > 70 );
let users = qualifiedStudents.map(s=>s.name);
let qualifiedStudent1 = students.filter(s =>s.score > 70).map(s =>s.name);// one more method
console.log(students);
console.log("qualifiedStudents:",qualifiedStudents);
console.log(users);