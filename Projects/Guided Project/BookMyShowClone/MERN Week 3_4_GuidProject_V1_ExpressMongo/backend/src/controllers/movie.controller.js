const movieService = require("../services/movie.service");
//create movie
exports.createMovie = async(req,res,next)=>{
  try{
    const movie = await movieService.createMovie(req.body);

    res.status(201).json({
        success:true,
        message:"Movie created successfully",
        data:movie,
    });
  }
  catch(error){
    next(error);
  }
};
//get movies
exports.getMovies = async(req,res,next)=>{
  try{
    const result = await movieService.getMovies(req.query);

    res.status(200).json({
        success:true,
        message:"Movie list fetched",
        data:result,
    });
  }
  catch(error){
    next(error);
  }
};
//update
exports.updateMovie = async(req,res,next)=>{
  try{
    const movie = await movieService.updateMovie(req.params.id,req.body);

    res.status(200).json({
        success:true,
        message:"Movie updated successfully",
        data:movie,
    });
  }
  catch(error){
    next(error);
  }
};
//delete movie
exports.deleteMovie = async(req,res,next)=>{
  try{
    await movieService.deleteMovie(req.params.id);

    res.status(200).json({
        success:true,
        message:"Movie deleted successfully",
        data:movie,
    });
  }
  catch(error){
    next(error);
  }
};