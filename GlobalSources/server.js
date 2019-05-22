const Koa = require('koa');
const app = new Koa();
const get_finger = require("./test3.js");

app.use(async ctx => {
    ctx.body = get_finger.get_finger();
});

app.listen(3000);


