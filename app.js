const koa = require('koa')
const cors = require('koa2-cors')
var app = new koa()
var proxy = require('koa-proxy')

app.use(cors({
    origin: 'http://localhost:1234',
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'Accept-Custom-Type', 'OAUTH2', 'zx-oauth2','Content-Encoding']
}))

app.use(proxy({
    host: 'http://:8011',
}));


app.listen(3000)
