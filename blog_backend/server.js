const express = require('express')
const fs = require('fs')
const path = require('path')
const url = require('url')
const app = express()
const bodyparser = require('body-parser')
const blog = require('./Router/BlogRouter')
const file = require('./Router/FileRouter')

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/blog',blog)
app.use('/file',file)
app.use('/static',express.static('uploads'))


app.listen(3000,()=>{
    console.log('Server Start')
})

