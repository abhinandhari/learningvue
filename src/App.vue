<template>
  <div id="app">
    <img src = "./assets/logos.jpeg" width = 100 height = 100 > 
    <h1> The Employee Manager 101 </h1>
    <employee/>
  </div>
</template>
<script>
import Employee from './components/Employee.vue'
export default {
  components: {
    Employee,
  }
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
