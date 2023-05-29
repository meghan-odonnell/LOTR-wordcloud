<template>
    <div>
      <img :src="base64Image" alt="Word Cloud Image Goes Here" />
    </div>
  </template>
  
  <script>
 import WordcloudService from '@/services/WordcloudService';

  
  export default {
    name:'wordcloudComponent',
    data() {
      return {
        base64Image: '',
        options: {
          text: '',
          size: '',
          font: '',

        }
      };
    },
    async created() {
    try {
      this.text = 'here is my new text I am testing for my wordcloud test testing'
      const response = await WordcloudService.generateWordcloud(this.text);
      console.log(response);
      this.base64Image = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  };
  </script>
  