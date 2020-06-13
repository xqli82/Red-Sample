const commonRouter = require('./common')

module.exports = function (app) {
    app.use('/', commonRouter)
}