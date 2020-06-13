const {whiteList,permission} = require('../userSettings/user')

module.exports=function(req,res,next){
    try {
        //white list
        if(whiteList.some(item=>{
            return item === req.url
        })){
           return next()
        }

        //admin
        permission_url=permission[req.app.userType]
        if(req.app.userType==='admin'){
            return next()
        }

        //url
        if(permission_url.some(item=>{
            let url="/"+req.url.split('/')[1]
            return item.method === req.method && item.url===url
        })){
            return next()
        }else{
            res.send('访问权限不够,禁止访问')
        }
    
    } catch (error) {
        return res.redirect('/404')
    }
}