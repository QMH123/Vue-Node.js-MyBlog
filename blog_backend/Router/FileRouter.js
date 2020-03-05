const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.resolve(__dirname,'..'+'/uploads/poster'))
    },
    filename: function (req, file, cb) {
      let type = file.originalname.split(".")
      let length = type.length
      console.log(type[length-1])
      let a = ""
      for(let i = 1;i<=10;i++){
        a += Math.floor((Math.random()*10)+1);
      }
      console.log(a)
      cb(null,a + '.' + type[length-1] )
    }
  })
  
  var upload = multer({ storage: storage })

  router.post('/upload',upload.single('img'),(req,res)=>{
      console.log(req.file)
      res.send('http://175.24.63.102:3000/static/poster/'+req.file.filename)
  })

module.exports = router