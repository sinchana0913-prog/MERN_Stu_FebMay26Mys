//CRUD operation in mongoDB using Mongoose

const mongoose = require("mongoose");
async function runCrudDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDB connected succesfully");

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        });
        const Student = mongoose.model.Student || mongoose.model("Student",studentSchema);
        //clearing previous demo data
        await Student.deleteMany({role:"demo-student"});

        //create using save()
        const firstStudent = new Student({
            name: "sinchana",
            age: 20,
            role: "demo-student"
        });
        await firstStudent.save();
        //console.log("created new student with save()",firstStudent);
        //create using create()
        const secondStudent = await Student.create({
            name: "chethan",
            age: 21,
            role: "demo-student"
        });
        //console.log("created new student with save()",secondStudent);

        //Read using fiind()
        const allDemoStudents = await Student.find({role:"demo-student"});
        //console.log("Read with find():",allDemoStudents);

        //read using findOne()
        const oneDemoStudent = await Student.findOne({name:"chethan"});
        console.log("read using findOne():",oneDemoStudent)

        //update using findByIdAndUpdate()
        const updatedStudent = await Student.findByIdAndUpdate(
            secondStudent._id,
            {age:22},
            {new:true}
        );
        console.log("Updated with findByIdAndUpdate():",updatedStudent);

        //delete using findByIdAndDelete()
        const deletedStudent = await Student.findByIdAndDelete(firstStudent._id);
        console.log("delete using findByIdAndDelete():",deletedStudent);
         await mongoose.connection.close();
               console.log("connection closed");

    }
    catch(error){
        console.log("Crud demo error:",error.message);
    }
}
runCrudDemo();