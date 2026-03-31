const express = require("express");
const app = express();
// 

// Router objects help organize route group
const apiRouter = express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"users route inside api router"
    });
});
apiRouter.get("/Order",function(req,res){
    res.json({
        route:"/api/Order",
        message:"Order route inside api router"
    });
});

 app.use("/api",apiRouter);

 app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});