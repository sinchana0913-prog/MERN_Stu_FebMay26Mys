//Combine  example of virtual,filter,lean,sort and select
const mongoose = require("mongoose");
const { create } = require("node:domain");

async function demo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDB connected successfully");

        // const productSchema = new mongoose.Schema({
        //     name:String,
        //     price:Number,
        //     category:String,
        //     description:String,
        //     stock:Number,
        //     tag:String
        // });

        const userSchema = new mongoose.Schema({
            firstName:String,
            lastName:String,
            email:{type:String, index:true},
            username:{type:String, unique:true},
            role:String,
            createdAt:Date,
            tag:String
        },
        {
             toJSON:{virtuals:true},
             toObject:{virtuals:true}
        }
    );

      userSchema.index({role:1,createdAt:-1});

      userSchema.virtual("fullname").get(function(){
          return this.firstName + " "+this.lastName;
});
         const User = mongoose.models.PerformanceUser || mongoose.model("PerformanceUser",userSchema);

         await User.deleteMany({tag:"demo-example"});
          await User.deleteMany({tag:"demo-example1"});

         await User.create([
            {
            firstName:"Sinchana",
            lastName:"Gowda",
            email:"inchu@r.com",
            username:"iv123",
            role:"user",
            createdAt:new Date("2026-04-11"),
            tag:"demo-example"
            },
            {
            firstName:"Chandu",
            lastName:"Gowda",
            email:"chandu@r.com",
            username:"cv123",
            role:"admin",
            createdAt:new Date("2026-04-10"),
            tag:"demo-example1"
            },
            {
            firstName:"Veeru",
            lastName:"Gowda",
            email:"veeru@r.com",
            username:"bv123",
            role:"user",
            createdAt:new Date("2026-04-06"),
            tag:"demo-example1"
            }
         ]);
          
         //filter,select,sort,lean
         const users = await User.find({ tag:"demo-example"}).select("firstName lastName email role createdAt")
                             .sort({createdAt:-1}).limit(2).lean();
        console.log("Optimized user query result:",users);
        
        const oneUser = await User.findOne({ email:"veeru@r.com", tag:"demo-example1"});
        console.log("Virtual fullname:",oneUser.fullname);

        
        await mongoose.connection.close();
        console.log("connection closed");

    }
    catch(error){
          console.log("Demo error:",error.message);
    }
}
demo();