const express = require('express')

// 4.引入router
const router = require("./router/DataRouter")

const cors = require('cors')
const bodyParser = require("body-parser")

// 2.创建服务器
const app = express()

app.use(cors())
app.use(bodyParser.json())

// 5.注册全局路由
app.use(router)

// 3.导出去
module.exports = app