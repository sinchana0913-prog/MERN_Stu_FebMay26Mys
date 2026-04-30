const  express = require("express");
const authRoutes = require("./src/routes/auth.routes");
const movieRoutes = require("./src/routes/movie.routes");
const bookingRoutes = require("./src/routes/booking.routes");
const errorMiddleware = require("./src/middleware/error.middleware");
const showRoutes = require("./src/routes/show.routes");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/movies",movieRoutes);
app.use("/api/bookings",bookingRoutes);
app.use(morgan("dev"));
app.use(errorMiddleware);
app.use("/api/shows",showRoutes);
//Base URL 
app.get("/",(req,res)=>{
    res.status(200).json({
    success:true,
    messsage: "Movie booking API is ruuning...",

});
});


module.exports = app;