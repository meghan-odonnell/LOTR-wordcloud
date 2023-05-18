<template>
  <div>
    {{wordcloud}}
  </div>
</template>

<script>
import WordcloudService from './services/WordcloudService.vue'

export default {
    name: 'word-cloud',
    data() {
        return {
            wordcloud: []
        }
    },
    created() {
        WordcloudService.wordcloud().then( (response) => {
            console.log(response.data);
            this.wordcloud = response.data;
        })
    },
}


</script>

<style>

</style>