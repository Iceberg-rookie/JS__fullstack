<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'App',
  mouned() {
    fetch('http://localhost:8080/api/v1')
    .then(data => data.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
