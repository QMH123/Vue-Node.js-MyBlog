<template>
    <div class="box">
        <mavon-editor ref="md" @save="submit" codeStyle="monokai" v-model="value"  @imgAdd="$imgAdd" class="editor" >

        </mavon-editor>
        <div class="submit" v-show="onshow">
            <div class="form">
            <p>博客标题</p>
           <input type="text" v-model="title">
           <p>选择封面图片</p>
           <input type="file" style="font-size:15px" accept="image/gif, image/jpeg, image/jpg, image/png, image/svg" 
           ref="file" id="file">
           <button @click="doUpload()">上传图片</button>
           <img id="backimg">
            </div>
           <button id="bt_2" @click="submitBlog()">上传博客</button>
        </div>
        
    </div>
</template>
<script>
export default {
  name: 'writeBlog',
  data(){
      return{
        value:'',
        onshow:false,
        title:'',
        titleImgUrl:''
      }
  },
  methods:{
      submit:function(){
            this.onshow = true
      },
      $imgAdd(pos, $file){
                // 第一步.将图片上传到服务器.
                var formdata = new FormData();
                formdata.append('img', $file);
                console.log(formdata)
                this.$request({
                    url: '/file/upload',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((url) => {
                    console.log(url)
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    // $vm.$img2Url 详情见本页末尾
                     this.$refs.md.$img2Url(pos, url.data);
                })
        },
        doUpload:function(){
            var that = this
            let file = $('#file').get(0).files[0] //获取上传图片的信息
            let formdata = new FormData()       //创建formdata对象
            formdata.append('img',file)
            /* console.log(file)
            this.$request({
                    url: '/file/upload',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
            }).then((url)=>{
                console.log(url)
                $('#backimg').attr('src',url)
                that.titleImgUrl = url
            }) */
                 $.ajax({
                 url:'http://175.24.63.102:3000/file/upload',
                 type:'POST',
                 cache:false,
                 data:formdata,
                 processData:false,
                 contentType:false,
                 success:function(data){
                     console.log(data)
                     $('#backimg').attr('src',data)
                     that.titleImgUrl = data
                 }
             })
        },
        submitBlog:function(){
            var myDate = new Date()
            var that = this
            var date = ""+ myDate.getFullYear() + '-' + (myDate.getMonth()+1) + '-' +myDate.getDate()
            console.log(date)
          this.$request
                .post('/blog/submit',{
                        "title":that.title,
                        "content":that.value,
                        "titleImgUrl":that.titleImgUrl,
                        "date":date
                })
                .then(res=>{
                    that.onshow = false;
                    that.value = that.title = that.titleImgUrl = '';
                    that.$router.push('showBlog')
                    console.log(res)
                })
        }
  }

        
}

</script>
<style scoped>
.box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.editor{
    position: absolute;
    top: 5%;
    height: 90%;
    width: 90%;
    left: 5%;
    z-index: 1;
}

.bt{
    position: absolute;
    top: 10px;
}

.submit{
    position: absolute;
    width: 60%;
    height: 70%;
    top: 20%;
    left: 20%;
    background-color: rgb(248, 248, 247);
    border-radius: 10px;
    box-shadow: 5px 5px 30px gray;
    z-index: 10;
    text-align: center;
    display: flexbox;
    flex-direction: row;
}

.submit p{
    font-size: 25px;
    font-weight: 700;
    padding: 20px;
}

.form input{
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    outline: none;
    border-bottom-style: solid rgb(0, 26, 255) 2px ;
    background-color: rgb(248, 248, 247);
    height: 50px;
    font-size: 25px;
}

.form{
    position: relative;
    top: 2%;
}

#backimg{
    position: relative;
    top: 5px;
    width: 350px;
    height: 220px;
    overflow:hidden;
}

#bt_2{
    position: relative;
    top: 10px;
}


</style>