import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = {
        status: 'success'
    }
})

router.get('/app', async (ctx, next) => {
    ctx.body = {
        status: 'api app'
    }
})

export default router;