const express = require('express')
const mysql = require('../DB/db')
const path = require('path')
const fs = require('fs')
const router = express.Router()

router.post('/submit',(req,res)=>{
    let {title,content,titleImgUrl,date} = req.body
    let id = ""
    for(let i = 1;i<=10;i++){
      id += Math.floor((Math.random()*10)+1);
    }
    console.log(id)
    
    fs.writeFile(path.resolve(__dirname,'../uploads/md/'+id+'.md'),content,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log(path.resolve(__dirname,'../uploads/md/'+id+'.md'))
        }
        
    })

    let sql = `insert into blog_info values ('${id}','${date}','${titleImgUrl}','${title}')`;

    mysql.query(sql, [], function(result, fields) {
        res.send({data:result,info:'提交成功'})
    });
})

router.get('/getBlogList',(req,res)=>{
    let sql = "SELECT title , titleImgUrl , date FROM blog_info"
    mysql.query(sql,[],(result,fields)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        // console.log(result);
        res.send(result)
    })
})

router.post('/delBlog',(req,res)=>{
    let title = req.body.title
    let id
    let check = `SELECT id FROM blog_info WHERE title = '${title}'`
    mysql.query(check,[],(result,fields)=>{
        id = result[0].id
        console.log(path.resolve(__dirname,'../uploads/md/'+id+'.md'))
        fs.unlink(path.resolve(__dirname,'../uploads/md/'+id+'.md'),(err)=>{
            if(err){
                res.send("删除failed")
            }else{
                let sql = "DELETE FROM blog_info WHERE title = " + "'" + title + "';"
                mysql.query(sql,[],(result,fields)=>{
                    console.log(result);
                    res.send("delete ok")
                }) 
            }
        })
    })

   
})

router.post('/editBlog',(req,res)=>{
    let {title,content,titleImgUrl,date,id} = req.body
    let sql = "UPDATE blog_info SET title = '" + title + "',"  + "titleImgUrl = '" + titleImgUrl +  "'," + "date = '" + date +  "'" + "WHERE id = '" + id +"';"
    console.log(sql)
    mysql.query(sql,[],(result,fields)=>{
        fs.writeFile(path.resolve(__dirname,'../uploads/md/'+id+'.md'),content,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log(path.resolve(__dirname,'../uploads/md/'+id+'.md'))
            }
        res.send("edit success")
    })
})
})

router.post('/showBlog',(req,res)=>{
    let title = req.body.title
    let sql = "SELECT * FROM blog_info WHERE title = " + "'" + title + "';"
    let data={"title":"","id":"","titleImgUrl":"","date":"","content":""};
    mysql.query(sql,[],(result,fields)=>{
        data.date=result[0].date;
        data.title=result[0].title;
        data.id=result[0].id;
        data.titleImgUrl=result[0].titleImgUrl;
        console.log(path.resolve(__dirname,'../uploads/md/'+data.id+'.md'))
        fs.readFile(path.resolve(__dirname,'../uploads/md/'+data.id+'.md'),(err,md)=>{
        if(err){
            console.log(err)
        }else{
            data.content = md.toString()
            res.send(data)
        }
    })
    })

})

module.exports = router