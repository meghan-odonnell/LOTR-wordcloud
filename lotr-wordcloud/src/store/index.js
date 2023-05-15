import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */


// const currentToken = localStorage.getItem('token')
const currentToken = '7RJ-gg4XBxizYjaoAnGq';
// const currentUser = JSON.parse(localStorage.getItem('user'));
const currentUser = 'odonnell.meghan@gmail.com';

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    
    quotes: {},

  },
  mutations: {
    SET_LOTR_QUOTES(state,quote){
      state.quotes = quote;
    },
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
 
      localStorage.setItem('user',JSON.stringify(user));
    },
   
  }
})
