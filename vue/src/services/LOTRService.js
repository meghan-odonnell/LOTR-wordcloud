import axios from 'axios'

const API_URL = 'https://the-one-api.dev/v2'
const LOTR_KEY = '7RJ-gg4XBxizYjaoAnGq'

export default {
  
  getQuotes() {
    //return axios.get(API_URL + '/quote'+'?api_key='+{LOTR_KEY})
    return axios({
      method: "get",
      url: API_URL + '/quote',
      headers: {
        Authorization: `Bearer ${LOTR_KEY}`,
      },
    })
  }
  
}
