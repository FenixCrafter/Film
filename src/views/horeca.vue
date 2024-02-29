<script setup>

</script>

<template>
  <div class="titleBar">
    <div class="titleBarText">
      <p>Horeca</p>
    </div>
  </div>
  <div class="container">
    <div class="left">
      <p>Op ons festival zijn
        verschillende horeca gelegenheden. Je kan er terecht voor een hapje en een drankje. Er is voor ieder wat wils. </p>
    </div>
    <div class="right">
      <div class="item">
        <img src="../assets/img/patatjes.jpg" alt="">
      </div>
      <div class="item">
        <img src="../assets/img/popcorn.jpg" alt="">
      </div>
      <div class="item">
        <img src="../assets/img/bioswinkel.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .titleBar{
    width: 100%;
    background: cadetblue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .titleBarText{
    p{
      font-size: 20px;
    }
  }

  .container{
    margin: 10px;
    padding: 0 20%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .left, .right{
    margin: 10px;
    width: 90%;
    height: 180px;
    background: antiquewhite;
    p{
      padding: 10px;
      font-size: 22px;
      font-weight: bold;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

 .right{
   display: flex;
   justify-content: space-around;
   align-items: center;
   .item{
     width: 40%;
     height: 100%;
   }
 }
</style>