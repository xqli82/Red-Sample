const fs=require('fs')
const path=require('path')

module.exports=function(url){
    let requestPath=path.join(process.env.rootPath,'./red_dir/html/',url)
    console.log(requestPath)
    return fs.readFileSync(requestPath)
}