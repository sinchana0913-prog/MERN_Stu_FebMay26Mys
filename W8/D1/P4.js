// Sorting, limiting and Pagination

const mongoose = require("mongoose");
const Product = require("./P3"); 

async function sortPaginationDemo(){
    try{
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const sortedAscending = await Product.find({category: "Electronics"}).sort({price:1});
        console.log(sortedAscending);

        const sortedDesending = await Product.find({category: "Electronics"}).sort({price:1});
       console.log(sortedDesending);

        //limit() restricts result count
        const limitedResults = await Product.find({category:"Stationary"}).sort({createdOrder:1}).limit(2);
        console.log("Limited results:",limitedResultslts);

        //Pagination
        const page = 21;
        const limitCount = 2;
        const skip = (page-1)*limitCount;

        const paginatedResults = await Product.find({category:"Stationary"}).sort({createdOrder:1}).skip(skipCount).limit(limitCount);
        console.log("Pagination Results:",paginatedResults);

        await mongoose.connection.close();
        console.log("connection closed");
    }
     catch(error){
        console.log("sort_Pagination demo error:",error.message);
    }
}
sortPaginationDemo();