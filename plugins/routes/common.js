const { createToken } = require('../jwt')
const userSettings = require('../../userSettings/user')


exports.login = async (req, res) => {
    try {
        let username = req.body.username || ""
        let password = req.body.password || ""

        if (userSettings.account.some(item => {
            return item.username === username && item.password === password
        })) {
            return res.send({
                code: 200,
                msg: 'success!',
                token: createToken({ "username": username })
            })
        } else {
            return res.send({
                code: 404,
                msg: '登录失败(Auth Failed)! \n确认账号密码是否正确!\nCheck Username & Password!',
                token: ""
            })
        }
    } catch (error) {
        res.send({
            code: 422,
            msg: '输入错误',
            token: ""
        })
    }
}

exports.logout = (res, req) => {
    req.app.username=""
    res.send({
        code: 200,
        msg: 'logout',
        token: ""
    })
}
