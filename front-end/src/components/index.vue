<template>
<div>
        <img class="bg" src="../assets/img/background/index5.jpg">
        <ul class="bar">
                <!-- <li class="nav" @click="showhome()">
                <img src="../assets/img/icon/home.png" class="icon">
                <a class="title">HOME</a>
                </li> -->

                <li class="nav" @click="showmanager()">
                <img src="../assets/img/icon/about.png" class="icon">
                <a class="title">MANAGER</a>
                </li>

                <li class="nav" @click="showblog()">
                <img src="../assets/img/icon/blog.png" class="icon">
                <a class="title">BLOG</a>
                </li>

                <li class="nav" @click="toWrite()">
                <img src="../assets/img/icon/write.png" class="icon">
                <a class="title">WRITE</a>
                </li>

                <li class="nav" @click="toConnact()">
                <img src="../assets/img/icon/connact.png" class="icon">
                <a class="title">CONNACT</a>
                </li>
       
        </ul>
        <div class="router">
        <router-view >
        </router-view>
        </div>
    
</div>
  
</template>

<script>
export default {
  name: 'index',
  data(){
      return{
         
      }
  },
  methods:{
      showhome: function(){
          this.$router.push('home')
      },
      toWrite: function(){
          this.$router.push('writeBlog')
      },
      showblog: function(){
          this.$router.push('showBlog')
      },
      showmanager:function(){
          this.$router.push('manager')
      },
      toConnact:function(){
          this.$router.push('connact')
      }

  }
}
</script>

<style scoped>
     @import '../assets/css/index.css';
</style>
