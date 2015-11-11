'use strict'
var koa = require('koa')

var serve = require('koa-static')
var logger = require('koa-logger')
var router = require('koa-router')()


var app = koa()

app.use(serve('./build'))
app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods());

router
  .get('/', function *(next) {
    console.log('Files are being served');
  })

app.listen(3000)
