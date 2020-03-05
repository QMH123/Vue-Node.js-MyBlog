<template>
    <div class="box">
        <div class="poster">
            <img src="../assets/img/background/index2.jpg">
        </div>
        <div class="cover">
            <div class="intro">
            <h1>记录学习心得</h1>
            <h1>分享生活体验</h1>
            <h1>这里是Qmhhh的Blog</h1>
            <h4>Uestcer / WebDesigner / Basketball Fan</h4>
            </div>
            <div class="connact">
                <h6>@2020 CREATED BY MoHan Qin</h6>
            </div>
        </div>
        <div class="stage">
            
            <div class="blog">
                <img src="../assets/img/background/jqm.jpeg" class="logo">
                <h1>B L O G</h1>
            </div>

            <div v-for="(item,index) in BlogList" class="blog_list">
                <router-link class="title" :to="{name: 'blogtext', params: {title: item.title}}">{{item.title}}</router-link>
                <h3 class="date">{{item.date}}</h3>
                <img :src="item.titleImgUrl">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'showBlog',
  data(){
      return{
          BlogList:[]
      }
  },
   created(){
       var that = this
     this.$request({
                     url: '/blog/getBlogList',
                     method: 'get',
                     headers: { 'Content-Type': 'multipart/form-data' },
                 }).then((res) => {
                     console.log(res.data)
                     that.BlogList = res.data
                     console.log(that.BlogList)
                 })
   }
}
</script>
<style scoped>
    .box{
        width: 100%;
        height: 100%;
    }

    .poster{
        position: fixed;
        top: 0;
        left: 10%;
        height: 100%;
        width: 40%;
    }

    .poster img{
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .cover{
        position: fixed;
        top: 0;
        left: 10%;
        height: 100%;
        width: 40%;
        background-color: rgba(63, 63, 63,0.5);
        z-index: 1;
        text-align: center;
        color: rgb(255, 255, 255);
    }

    .stage{
        background-color: rgb(255, 255, 255);
        position: absolute;
        left: 44.4%;
        top: 0;
        width: 55.6%;
        height: 8000px;
        z-index: 1;
    }


    .blog{
        position: relative;
        top: 50px;
        color: #000;
        text-align: center;
    }

    .intro{
        position: relative;
        top: 15%;
    }
    .intro h1{
        padding: 25px;
    }

    .connact{
        position: relative;
        top: 50%;
    }

    .logo{
        height: 150px;
        width: 150px;
        clear: both;
        display: block;
        margin: auto;
    }

    .blog_list{
        position: relative;
        top: 50px;
        width: 80%;
        left: 10%;
        height: 220px;
        margin: 40px;
        text-align: center;
        background-color: rgba(63, 63, 63,0.5);
    }

    .blog_list img{
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    .title{
        position: absolute;
        top: 40px;
        left: 40px;
        font-size: 30px;
        color: rgb(255, 255, 255);
        z-index: 2;
    }

    .date{
        position: absolute;
        top: 100px;
        left: 40px;
        color:white;
    }
</style>