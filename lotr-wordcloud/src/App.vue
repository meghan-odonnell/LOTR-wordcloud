<template>
  <h1>LOTR quotes</h1>
  <LOTRQuotes></LOTRQuotes>
  <img src="{{ wordcloudService.response }}" />
  <WordcloudService></WordcloudService>

  
</template>

<script>

import LOTRQuotes from './components/LOTRQuotes.vue'
import WordcloudService from './services/WordcloudService.js'

export default {
  name: 'App',
  components: {
   
    LOTRQuotes,
    WordcloudService
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
