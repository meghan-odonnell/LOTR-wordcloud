import axios from 'axios'

const API_URL = 'https://the-one-api.dev/v2'


export default {
  getQuotes() {
    return axios.get(API_URL + '/quote')
  }
}