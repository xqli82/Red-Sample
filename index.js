const init = require('./init')
const express = require('express')
const RED = require('node-red')
const http = require('http')
const cookies = require('cookie-parser')
const {redSettings, commonSettings } = require('./userSettings')
const middleware = require('./middleware')
const routes = require('./routes')

const app = express()

app.use('/static', express.static("public"))

app.engine('html', require('express-art-template'));
app.set('views', {
    debug: true
});

app.set('views', require('path').join(__dirname, 'views'));
app.set('view engine', 'art');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookies())

middleware(app)

routes(app)

const server = http.createServer(app)


RED.init(server, redSettings);
app.use(redSettings.httpAdminRoot, RED.httpAdmin);
app.use(redSettings.httpNodeRoot, RED.httpNode);

app.use(function (err, req, res, next) {
    if (err) {
        res.send('sorry,error coming...')
    }
})

app.all('*', async function (req, res) {
    await setTimeout(() => {
        res.render('404.html', {})
    }, 500);
})

server.listen(commonSettings.port, function () {
    console.log(`--------server is running on port:${commonSettings.port}------------`)
});

RED.start();