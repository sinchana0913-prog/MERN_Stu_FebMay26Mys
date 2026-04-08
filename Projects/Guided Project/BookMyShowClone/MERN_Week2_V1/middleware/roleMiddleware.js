//Checks the permission for request and allows it or rejects it
const customError = require("../utils/customError");

function roleMiddleware(...allowedRoles){
      return(req,res,next)=>{
        if(!req.user){
            return next(new customError("User info is not found.",401));
        }
        if(!allowedRoles.includes(req.user.role)){
            return next(new customError("AForbidden:you do not have access to this resource.",401));
        }
        next();
      };
}
module.exports = roleMiddleware;