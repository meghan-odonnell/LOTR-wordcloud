<template>
  <h1>LOTR quotes</h1>
  <LOTRQuotes></LOTRQuotes>


  
</template>

<script>

import LOTRQuotes from './components/LOTRQuotes.vue'

export default {
  name: 'App',
  components: {
   
    LOTRQuotes
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
