const commonRouter = require('express').Router()
const { login, logout } = require('../plugins/routes/common')

commonRouter.get('/login', function (req, res) {
    res.render('login.html', {
        title: 'login'
    })
})

commonRouter.get('/404', function (req, res) {
    res.render('404.html', {
        title: '404'
    })
})

commonRouter.post('/login', login)
commonRouter.post('/logout', logout)

module.exports = commonRouter