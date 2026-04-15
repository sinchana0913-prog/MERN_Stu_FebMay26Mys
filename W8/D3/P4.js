//Basics of embedding and referencing
const mongoose = require("mongoose");

async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });
        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema] //embedded document
        });
        const User = mongoose.model('User',userSchema);
        // const embeddedUser = await User.create({
        //     name:"sinchana",
        //     orders:[
        //         {product:"laptop",price:50000},
        //         {product:"printer",price:10000},
        //         {product:"projector",price:70000},
        //     ]
        // });
        //console.log(embeddedUser); // fetch only related data
        //console.log("User:\n");
        //console.log(await User.find());
        const users = await User.find().lean();
    console.log(JSON.stringify(users,null,2)); 

        //referencing
        const userRefSchema = new mongoose.Schema({
            name:String

        });
        const orderRefSchema = new mongoose.Schema({
            product:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        });
        const UserRef = mongoose.model('UserRef',userRefSchema);
        const OrderRef = mongoose.model('OrderRef',orderRefSchema);

        const refUser = await UserRef.create({name:"cheth"});
        await OrderRef.create([
            {product:"phone",price:130000,user:refUser._id},
            {product:"television",price:50000,user:refUser._id },

        ]);
        // console.log("referenced orders");
        // console.log(await OrderRef.find().populate('user'));

    }
    catch(error){
        console.error("Error:",error.message);

    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();