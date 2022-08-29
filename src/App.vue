<template>
  <div id="app">
    <h1>舆警</h1>
    <h3>————基于大数据的话题检测追踪系统</h3>
    <nav>
      <router-link to="/search">Home</router-link> |
      <router-link to="/result">Result</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
