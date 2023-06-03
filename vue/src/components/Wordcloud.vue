<template>
  <div>
    <img :src="base64Image" alt="Word Cloud Image Goes Here" />
  </div>
</template>
  
<script>
import WordcloudService from '@/services/WordcloudService';


export default {
  name: 'wordcloudComponent',
  props: {
    docs: {
      type: Array,
      required: true,
    },
  },
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
        this.text = this.docs.docs.map((doc) => doc.doc.dialog);
        // console.log("first error" + this.text)
        this.text = this.docs.docs.dialog;
        console.log("second error" + this.text)
        const response = await WordcloudService.generateWordcloud(this.text);
        console.log(response);
        this.base64Image = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  }
</script>
  