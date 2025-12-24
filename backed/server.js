const express = require('express')
const mongoose = require("mongoose")

// 6.引入服务器app.js
const app = require("./app")

//2.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/mongoosedb') 

// 3.连接成功的回调
mongoose.connection.on("open",()=>{
    console.log('数据库连接成功');
})
// 4.连接失败的回调
mongoose.connection.on('error',()=>{
    console.log("数据库连接失败");
})

// 5.启动服务
app.listen(80,()=>{
    console.log('http://127.0.0.1');
})