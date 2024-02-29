<script setup>

</script>

<template>
  <div class="container">
    <div class="defconImg">
      <img src="../assets/img/stock.jpg" alt="cinema">
    </div>
  </div>

  <footer>
    <div class="footerBar">
      <div class="footerText">
        <p>Noteer de datums in je agenda</p>
      </div>
    </div>
</footer>
</template>

<style scoped lang="scss">
.container{
  padding: 0 20%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.img{
  width: 200px;
  height: 300px;
}
.defconImg{
  img{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}

footer{
  .footerBar{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: cadetblue;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .footerText{
    p{
      font-size: 20px;
    }
  }
}
</style>