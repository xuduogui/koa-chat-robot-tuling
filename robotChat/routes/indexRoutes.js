const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!pppp'
    })
})

router.get('test.io', async (ctx) => {
    ctx.response.body = { 'msg': 'rso' }
})

module.exports = router