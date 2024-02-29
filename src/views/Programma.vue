<script setup>

</script>

<template>
  <div class="titleBar">
    <div class="titleBarText">
      <p>Programma</p>
    </div>
  </div>

  <div class="container">
    <div class="date">
      <p>datum: 10-12-2024</p>
      <p>film: It</p>
      <p>film: Bigfoot</p>
      <p>film: Frozen</p>
      <p>aanvang: 20:00</p>
    </div>
    <div class="date">
      <p>datum: 11-12-2024</p>
      <p>film: After</p>
      <p>film: Willy wonka</p>
      <p>film: Millers girl</p>
      <p>aanvang: 20:00</p>
    </div>
    <div class="date">
      <p>datum: 12-12-2024</p>
      <p>film: Mamma mia</p>
      <p>film: Soof</p>
      <p>film: Shooter</p>
      <p>aanvang: 20:00</p>
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
  .date{
    width: 30%;
    height: 200px;
    background: antiquewhite;
    p{
      padding: 5px 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>