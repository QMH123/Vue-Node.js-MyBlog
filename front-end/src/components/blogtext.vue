<template>
    <div class="box">
      <img src="http://175.24.63.102:3000/static/bg/b2.jpg" class="poster">
      <div class="text">
        <p class="title">{{title}}</p>
        <p class="date"> 发布时间: {{date}}</p>
        <hr>
      </div>
      <div v-html="compiledMarkdown" class="md"></div>
    </div>
</template>
<script>
import marked from 'marked'
var rendererMD = new marked.Renderer()
marked.setOptions({
renderer: rendererMD,
gfm: true,
tables: true,
breaks: false,
pedantic: false,
sanitize: false,
smartLists: true,
smartypants: false
})
export default {
  name: 'blogtext',
  data(){
    return{
    date: '',
    titleImgUrl: '',
    title: '',
    content:'' }
  },
   created(){
     var that = this
     this.title = this.$route.params.title;
     console.log(this.title)
     this.$request
     .post('/blog/showBlog',{
                         "title":that.title,
                 })
                 .then(res=>{
                   console.log(res.data)
                    //  console.log(res.data[0].content)
                    that.content = res.data.content
                    that.date = res.data.date
                 })
   },
   computed: {
   compiledMarkdown: function () {
   return marked(this.content, { sanitize: true })
   }
  }
}
</script>
<style>
 .box{

   width: 100%;
   background-color: white;
 }

 .poster{
   position: fixed;
   top: 0;
   left: 10%;
   height: 100%;
   width: 35%;
 }

 .text{
   position: relative;
   top: 50px;
   left: 45%;
   width: 55%;
   height: 150px;
 }

 .text hr{
   width: 90%;
   position: relative;
   top: 25px;
 }

 .title{
   font-size: 40px;
   font-weight: bold;
 }

 .date{
   position: relative;
   top: 20px;
    font-size: 17px;
    color: rgb(59, 59, 59);
 }

 .md{
    position: relative;
   left: 45%;
   width: 55%;
   padding-bottom: 10px;
 }

 .md p,h1,h2,h3,h4,h5{
   padding: 10px;
 }

 .md p{
   line-height: 30px;
 }

 .md img{
   padding: 10px;
   height: 200px;
   width: 500px;
   clear: both;
    display: block;
    margin: auto;
 }
</style>