const axios = require("axios");


// env variable
require("dotenv").config();
// api key variable
const apiKey = process.env.API_KEY;

axios.get("https://api.chatgpt.com/query?text=Hello")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

/* Create click event for when the chek button is complete

animation should be something like fireworks and a sound bite 
*/

// new code name achievement checklist

// this check list should be interchangeable with whatever tasks you are trying to complete.

// this checklist will allow you to set tasks or goals and complete them like steps in a video game.

// when each "checkbox" is completed the checkbox is locked.

// if the checkbox was clicked by mistake or task was not fully complete , a 4 digit lock code is required and a "focus penalty(fp) " must be performed

// FP's are randomly generated using chatgpt api

//* below is starter code to use chatgpt API *//

/*const openai = require('openai')('<your_api_key>');

async function generateResponse(prompt) {
  const completions = await openai.completions.create({
    engine: 'davinci',
    prompt,
    max_tokens: 60,
    n: 1,
    stop: '\n',
  });
  const message = completions.choices[0].text.trim();
  return message;
}

// Example usage
const userMessage = 'Hello, how are you?';
const prompt = `Q: ${userMessage}\nA:`;
const botMessage = await generateResponse(prompt);
console.log(botMessage);
 */
