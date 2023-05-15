import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '4c3398dd4emsh8c862789fbc665ep1f345ajsn13c0622162cb',
    'X-RapidAPI-Host': 'textvis-word-cloud-v1.p.rapidapi.com'
  },
  data: {
    text: 'This is a test. I repeat, this is a test. We are only testing the functionality of this api, nothing else. End of test.',
    scale: 0.5,
    width: 400,
    height: 400,
    colors: [
      '#375E97',
      '#FB6542',
      '#FFBB00',
      '#3F681C'
    ],
    font: 'Tahoma',
    use_stopwords: true,
    language: 'en',
    uppercase: false
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}