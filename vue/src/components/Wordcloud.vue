<template>
    <div>
      <img v-bind:src="{{base64Image}}" alt="Word Cloud" />
      
    </div>
  </template>
  
  <script>
 import WordcloudService from '@/services/WordcloudService';

  
  export default {
    name:'wordcloudComponent',
    data() {
      return {
        base64Image: '',
      };
    },
    created() {
      WordcloudService.generateWordcloud().then( (response) => {
        this.base64Image = response.data;
      });
    },
  };
  </script>
  