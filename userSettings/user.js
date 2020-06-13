module.exports = {
    whiteList:[
        '/login',
        '/favicon.ico',
        '/404',
        '/logout'
    ],
    account: [
        {
            username: 'admin',
            password: '123',
            type: 'admin'
        },
        {
            username: 'user',
            password: 'public',
            type: 'user1'
        }],
    permission: {
        admin: ['all'],
        user1: [
            // { method: "GET", url: "/api" },
            { method: "GET", url: "/red" },

        ]
    }
}