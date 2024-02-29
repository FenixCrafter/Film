<script setup>

</script>

<template>
<div class="titleBar">
  <div class="titleBarText">
    <p>Algemene informatie</p>
  </div>
</div>

  <div class="container">
    <div class="left">
      <p>Ons festival wordt in december georganiseerd. het is een film festival, maar je kan er nog veel meer doen! dus kom met zn allen en neem gerust je vrienden mee</p>
    </div>
    <div class="right">
      <img src="../assets/img/plattegrond.png" alt="">
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
    justify-content: space-around;
    align-items: center;
  }

  .left, .right{
    width: 30%;
    height: 200px;
    background: antiquewhite;
    p{
      padding: 10px;
      font-size: 20px;
      font-weight: bold;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>