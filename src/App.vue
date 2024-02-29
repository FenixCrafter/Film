<template>
  <div class="headerImg">
    <img src="./assets/img/cinemaBanner.avif" alt="Defcon" />
  </div>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/information">Informatie</router-link>
    <router-link to="/program">Porgramma</router-link>
    <router-link to="/tickets">Kaarten</router-link>
    <router-link to="/horeca">horeca</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    border: 1px solid #2c3e50;
    text-decoration: none;
    margin: 10px;
    padding: 2px 10px;
    border-radius: 10%;
    background: cadetblue;
    font-weight: bold;
    color: #2c3e50;
  }
}
.headerImg {
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}
</style>
