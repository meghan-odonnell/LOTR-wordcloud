<template>
    <div>
       <!-- {{ docs}} -->
        <table>
            <tbody>
                <tr>
                    <th>Quote</th>
                </tr>
                <tr v-for="item in docs.docs" v-bind:key="item._id">
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
            docs: []
            
                // _id: '',
                // dialog: '',
                // movie: '',
                // character: '',
                // id: ''
        
            }
    
            
        
    },
    async created() {
        try {
        const response = await LOTRService.getQuotes()
        
                this.docs = response.data;
                console.log("Returning LOTR data")
                console.log(this.docs)
                console.log(response.data)
           
            }
            catch(error){
                console.error('Error occurred', error);
            }


    }

}
</script>
  
<style></style>