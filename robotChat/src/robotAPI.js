const request = require('request')

function  getRobotMsg (msg, users = 123456789) {
    let options = {
        url: 'http://www.tuling123.com/openapi/api',
        json: true,
        body: {
            key: '725165a153b64330989a229c0a1a42ff',
            userid: users,
            info: msg,
        }
    }
    return new Promise((resolve, reject) => {
        // 异步
        request.post(options, async (err, res, body) => {
            // 输出
            console.log(body.text)
            resolve(body.text)
            reject('失败')
        })
    })
    
}

module.exports = getRobotMsg