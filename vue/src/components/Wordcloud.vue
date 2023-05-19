<template>
    <div>
      <img :src="base64Image" alt="Word Cloud" />
    </div>
  </template>
  
  <script>
 import { generateWordcloud } from '@/services/WordcloudService';

  
  export default {
    name:'wordcloudComponent',
    data() {
      return {
        base64Image: '',
      };
    },
    created() {
      this.generateWordcloud();
    },
    methods: {
      async generateWordcloud() {
        const text = 'This is a test. I repeat, this is a test. We are only testing the functionality of this API, nothing else. End of test.';
  
        try {
          const imageData = await generateWordcloud(text);
          this.base64Image = 'data:image/png;base64,' + imageData;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  