const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: 'e1abc39d',
  apiSecret: 'E2AdbEKTGIYFmQgf'
});

const sendSMS = (to, text) => {
  const from = 'Vonage';
  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log('Error:', err);
    } else {
      if (responseData.messages[0]['status'] === '0') {
        console.log('Message sent successfully.');
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  });
};

module.exports = { sendSMS };
