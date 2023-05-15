<template>
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Quote</th>
                </tr>
                <tr v-for="item in quotes" v-bind:key="item._id" >
                    <td>{{ item.dialog }}</td>
                </tr>
            </tbody>
        </table>
    <p>{{$store.state.quotes}}</p>
    </div>
  </template>
  
  <script>
  
  
  import LOTRService from '../services/LOTRService.js'

  
  export default {
      
      name: 'lotr-quotes',
      
      created() {
        LOTRService.getQuotes().then(response => {
              this.$store.commit('SET_LOTR_QUOTES',response.data)
          })
      }
  
  }
  </script>
  
  <style>
  
  </style>