import Koa from 'koa'

const app = new Koa()

app.use(ctx => {
  ctx.body = "初始化项目！"
})

app.listen(3006)

console.log('the server is started at port 3006!')
