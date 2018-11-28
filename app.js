const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();

const controllers = require("./controllers.js");
app.use(bodyParser());
app.use(controllers());
app.listen(3000);


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
