const Koa = require("koa");
const Router = require("koa-router"); // 路由解析
const BodyParser = require("koa-bodyparser");
const app = new Koa();
const router = new Router();
const bodyParser = new BodyParser();
// 异步函数通过await next()来调用下一个中间件
// app.use(async (ctx, next) => {
//   console.log(`${ctx.request.method} ${ctx.request.url} 1231`); // 打印URL
//   await next(); // 调用下一个middleware
// });

// app.use(async (ctx, next) => {
//   const start = new Date().getTime(); // 当前时间
//   await next(); // 调用下一个middleware
//   const ms = new Date().getTime() - start; // 耗费时间
//   console.log(`Time: ${ms}ms`); // 打印耗费时间
// });

// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>Hello, koa2!</h1>';
// });
const main = async(ctx,next) => {
  await next();
  ctx.response.body = "Hello World";
};
const about = async(ctx,next) => {
  await next();
  let name = ctx.params.name;
  ctx.response.body = "About" + `${name}`;
}
router.get("/",main);
router.get("/about",about);
router.get("/about/:name",about);


app.use(router.routes());
app.listen(3000);
