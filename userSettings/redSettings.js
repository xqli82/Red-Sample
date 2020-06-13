const redFunction = require('../redFunction')
const userDir = require('path').join(process.env.rootPath, 'red_dir')

module.exports = {
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",
    userDir: userDir,
    ui: { path: '/ui' },
    functionGlobalContext: redFunction,    // enables global context
    credentialSecret: "fdsfrrrwttafdsffdsfdsf"
}

