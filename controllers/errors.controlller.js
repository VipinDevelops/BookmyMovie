module.exports.get404=(req,res,next)=>{
    res.status(404).send("Invalid input");
    console.log("Error");
}