exports.conf = {
    db: {
        host: '127.0.0.1',
        port: '27017',
        name: 'Shadowsocks-Manager',
        user: 'shadowsocks',
        pass: 'shadowsocks123'
    },
    admin: {
        email: 'yangzzu@163.com',
        password: 'y123456'
    },
    mail: {
        address: 'ynhzzu@gmail.com',
        password: 'sbwehdtqqurbhfue',
        smtp: 'smtp.gmail.com',
        webaddress: 'http://ss.quanminxingkong.com'
    },
    express: {
        http: 6003,
        https: 443,
        key: '',
        cert: ''
    }
};
