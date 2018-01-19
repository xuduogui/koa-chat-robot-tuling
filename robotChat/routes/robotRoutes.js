const router = require('koa-router')()

// 调用机器人
const getRobotMsg = require('../src/robotAPI')


// 根
router.prefix('/robot')

// 根路由
router.get('/', async (ctx, next) => {
    ctx.body = '这是调用智能小强的路上，你只需要设置  /robot/tohome/:id'
})

router.get('/tohome/:id', async (ctx, next) => {
    // 异步事件的问题
    console.log(ctx.params.id)
    await getRobotMsg(ctx.params.id).then(
        rso => ctx.response.body = {'msg': rso},
        err => console.log('请求出错' + err)
    )
})

module.exports = router