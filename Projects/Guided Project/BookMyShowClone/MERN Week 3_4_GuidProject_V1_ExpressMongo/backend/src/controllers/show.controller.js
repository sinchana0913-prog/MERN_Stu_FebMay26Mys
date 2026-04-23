const showService = require("../services/show.service");

//create show:admin
exports.createShow = async (req,res,next)=>{
    try{
        const show = await showService.createShow(req.body);
        res.status(201).json({
            success:true,
            message:"Show created successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};

//get shows
exports.getShow = async (req,res,next)=>{
    try{
        const shows = await showService.getShow(req.query);
        res.status(200).json({
            success:true,
            message:"Shows fetched successfully",
            data:shows,
        });
    }
    catch(error){
        next(error);
    }
};
//get single row
exports.getShowById = async (req,res,next)=>{
    try{
        const show = await showService.getShowById(req.params.id);
        res.status(200).json({
            success:true,
            message:"Show fetched successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};
//update show-admin
exports.updateShow = async (req,res,next)=>{
    try{
        const show = await showService.updateShow(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"Show updated successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};
//delete show
exports.deleteShow = async (req,res,next)=>{
    try{
        const show = await showService.deleteShow(req.params.id,req.body);
        res.status(200).json({
            success:true,
            message:"Show deleted successfully",
            data:show,
        });
    }
    catch(error){
        next(error);
    }
};