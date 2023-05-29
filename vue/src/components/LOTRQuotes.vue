<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Quote</th>
                </tr>
                <tr v-for="item in quotes" v-bind:key="item._id">
                    <td>{{ item.dialog }}</td>
                </tr>
            </tbody>
        </table>
      
    </div>
</template>
  
<script>


import LOTRService from '../services/LOTRService.js'


export default {

    name: 'lotr-quotes',
    data() {
        return {
            quotes: {
                _id: '',
                dialog: '',
                movie: '',
                character: '',
                id: ''

            },
        }
    },
    async created() {
        try {
        const response = await LOTRService.getQuotes()
          //  .then(response => {
                this.quotes = response.data;
                console.log("Returning data")
                //this.$store.commit('SET_LOTR_QUOTES', response.data);
            }
            catch(error){
                console.error('Error occurred', error);
            }


    }

}
</script>
  
<style></style>