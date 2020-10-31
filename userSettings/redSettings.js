const redFunction = require('../redFunction')
const userDir = require('path').join(process.env.rootPath, 'red_dir')
const path = require('path')

module.exports = {
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",
    userDir: userDir,
    ui: { path: '/ui' },
    functionGlobalContext: redFunction,    // enables global context
    credentialSecret: "fdsfrrrwttafdsffdsfdsf",
    flowFile:path.join(userDir,"flows_main.json"),
    editorTheme: {
        page: {
            title: 'v5w.com',
            css: path.join(process.env.rootPath,'public','css','myred.css'),
            scripts:path.join(process.env.rootPath,'public','js','myred.js')
        },
        header: {
            title: "Red-Sample物联网工具",
            image: path.join(process.env.rootPath,'public','img','logo.png'), 
            url:'https://www.v5w.com'
        },
    }
}

