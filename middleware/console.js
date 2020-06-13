module.exports=function(req,res,next){
    console.log('request url:\t'+req.url)
    next()
}