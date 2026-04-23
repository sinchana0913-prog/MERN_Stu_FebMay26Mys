const Booking = require("../models/booking");
const Show = require("../models/Show");

//create booking
exports.createBooking = async (userId,{showId,seats}) =>{
   //get show
   const show = await Show.findById(showId);

   if(!show){
    throw new Error("Show not found");
   }

   //validate seats
   const selectedSeats = show.seats.filter((seat)=>
seats.includes(seat.seatNumber));
   if(selectedSeats.length!=seats.length){
    throw new Error("seats do not exist");
   }

   //check if already booked
   for(let seat of selectedSeats){
    if(seat.isBooked){
        throw new Error(`Seat ${seat.seatNumber} is already booked`);
    }
   }
   //mark seats as booked
   show.seats = show.seats.map((seat)=>{
  if(seats.includes(seat.seatNumber)){
seat.islooked=true;
  }
  return seat;
   });
   //update available seats
   show.availableSeats-=seats.length;

   await show.save();

   //create booking
   const booking = await Booking.create({
    userId,showId,seats,totalSeats:seats.length,
   });
   return booking;
};

//get user bookings
exports.getUserBookings = async(userId)=>{
    const bookings = await Booking.find({
        userId,
        status:"booked",

    })
    .populate({
        path:"showId",
        select:"date time availableSeats movieId",
        populate:{
            path:"movieId",
            select:"title genre",
        },
    })
    .sort("-createdAt");

    //Transform response
    return bookings.map((booking)=>({
           bookingId:booking._id,
           seats:booking.seats,
           totalSeats:booking.totalSeats,
           status:booking.status,
           bookingTime:booking.bookingTime,

           show:{
            id:booking.showId._id,
            date:booking.showId.date,
            time:booking.showId.time,
            availbleSeats:booking.showId.availableSeats,
           },
           movie:{
            id:booking.showId.movieId._id,
            title:booking.showId.movieId._title,
            genre:booking.showId.movieId._genre,
           },
    }));

};

//cancel booking
exports.cancelBooking = async (bookingId,userId)=>{
    const booking = await Booking.findById(bookingId);
    if(!booking)
        throw new Error("Boking not found");

    if(booking.userId.toString()!==userId.toString()){
        throw new Error("Unauthorized");
    }
    if(booking.status === "cancelled"){
        throw new Error("Already cancelled.");
    }

    //get show
    const show = await Show.findById(booking.showId);
    //release seats
    show.seats =  show.seats.map((seat)=>{
        if(booking.seats.includes(seat.seatNumber)){
            seat.isBooked = false;
        }
        return seat;
    });
    //update available seats
    show.availableSeats +=booking.seats.length;
    await show.save();

    //update booking
    booking.status = "cancelled";
    await booking.save();
}