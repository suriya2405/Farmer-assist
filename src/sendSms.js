import axios from 'axios';

const sendSMS = async (to, message) => {
  const options = {
    method: 'POST',
    url: 'https://textflow.p.rapidapi.com/sms/send',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',  // Replace with your actual RapidAPI key
      'X-RapidAPI-Host': 'textflow.p.rapidapi.com'
    },
    data: {
      to: to,
      message: message
    }
  };

  try {
    const response = await axios.request(options);
    console.log('SMS response:', response.data);
  } catch (error) {
    console.error('Failed to send SMS:', error);
  }
};
