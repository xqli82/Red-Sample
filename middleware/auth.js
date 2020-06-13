const { decodeToken } = require('../plugins/jwt')
const { whiteList, account } = require('../userSettings/user')

module.exports = async function (req, res, next) {
	try {
		//白名单,特殊url不进行验证
		if (whiteList.some(item => {
			return item === req.url
		})) {
			return next()
		}

		let token = req.cookies.token
		if (token) {
			let username = decodeToken(token).username
			if (!username) {
				return res.redirect('/404')
			}

			let flag = false

			account.forEach(item => {
				if (item.username === username) {
					req.app.username = username
					req.app.userType = item.type
					flag = true
				}
			})

			if (flag) {
				return next()
			}

		} else if (req.url == '/login') {
			return next()
		} else {
			return res.redirect('/login')
		}

	} catch (error) {
		return res.redirect('/404')
	}

}