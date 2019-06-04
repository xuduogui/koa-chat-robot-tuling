const koa = require('koa')
const app = new koa()

const views = require('koa-views')

const index = require('./routes/indexRoutes.js')
const robot = require('./routes/robotRoutes.js')

// 静态文件
app.use(require('koa-static')(__dirname + '/public'))

// 模板引擎
app.use(views(__dirname + '/public', {
    extension: 'html',
}))

// 路由
app.use(index.routes(), index.allowedMethods())
app.use(robot.routes(), robot.allowedMethods())

module.exports = app