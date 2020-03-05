<template>
    <div class="box">
      <p id="title">Get In Touch</p>
          <div class="info" id="box_a">
            <img src="../assets/img/icon/locate.png" alt="" class="icon">
            <p>四川省成都市电子科技大学</p>
          </div>
          <div class="info" id="box_b">
            <img src="../assets/img/icon/qq.png" alt="" class="icon">
            <p>QQ : 1091660306</p>
          </div>
          <div class="info" id="box_c">
            <img src="../assets/img/icon/mail.png" alt="" class="icon">
            <p>1091660306@qq.com</p>
          </div>
    </div>
</template>
<script>
export default {
  name: 'connact'
}
</script>
<style scoped>
  .box{
    position: relative;
    top: 10%;
    width: 80%;
    left: 10%;
    height: 80%;
    background-color: white;
    border-radius: 15px;
    text-align: center;
  }

  #title{
    position: relative;
    top: 30px;
    font-size: 70px;
    font-weight: bold;
    color: rgb(65, 11, 116);
    font-family:fantasy;
  }

  .table{
    position: relative;
    top: 50px;
    height: 400px;
    width: 90%;
    left: 5%;
    border-style: solid;
  }

  .info{
    width: 220px;
    height: 220px;
    margin:15px;
    border-style:solid 2px  rgb(68, 68, 68);
     border-radius: 5px;
    box-shadow: 2px 2px 3px gray;
  }

  .info p{
    position: relative;
    top: 30%;
    font-weight: 600;
    font-size: 15px;
    font-family: '微软雅黑';
    color: rgb(58, 58, 58);
  }

  #box_a{
    position: absolute;
    left: 8%;
    top: 26%;
  }

  #box_b{
    position: absolute;
    left: 38%;
    top: 26%;
  }

  #box_c{
    position: absolute;
    left: 68%;
    top: 26%;
  }

  .icon{
    position: relative;
    top: 25px;
    height: 100px;
    width: 100px;
    margin: auto;
    display: block;
    clear: both;
  }
</style>