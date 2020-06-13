const console = require('./console')
const auth = require('./auth')
const permission =require('./permission')

module.exports=function(app){
    app.use(console)
    app.use(auth)
    app.use(permission)
}