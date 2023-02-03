const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
  
    const message = twiml.message();
    message.body('Thank you for sending messages!');
  
    res.type('text/xml').send(twiml.toString());
  });

app.post('/voice', (request, response) => {
    // Use the Twilio Node.js SDK to build an XML response
    const twiml = new VoiceResponse();
    twiml.say({ voice: 'alice' }, 'Thank you for calling!');
  
    // Render the response as XML in reply to the webhook request
    response.type('text/xml');
    response.send(twiml.toString());
  });

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});