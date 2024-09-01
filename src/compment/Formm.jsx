import React, { useState } from 'react';
import Plan from './Plan';
import { useNavigate } from 'react-router-dom';

const Formm = () => {
  const navigate = useNavigate();
  const [tweet, setTweet] = useState('');
  const [sentiment, setSentiment] = useState('');

  const API_KEY = import.meta.env.API_KEY;

  async function callOpenAIAPI() {
    console.log('calling the OpenAI API');

    const APIBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Give me a 5 days plan and places for this city' +
            tweet +
            'make it clean and clear',
        },
        {
          role: 'user',
          content: '',
        },
      ],
      temperature: 0.7,
      max_tokens: 300,
      top_p: 1,
    };
    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      },
      body: JSON.stringify(APIBody),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.choices && data.choices.length > 0) {
          const sentiment = data.choices[0].message.content;
          setSentiment(sentiment);
          navigate('/plan', { state: { sentiment } }); // Pass sentiment to Plan page
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // setSentiment(data.choices[0].text.trim()); //Positive or Negative
      });
  }
  return (
    <>
      <div>
        <textarea
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
          placeholder="Paste your tweet here!"
          cols={50}
          rows={10}
        ></textarea>
      </div>
      <div>
        <button onClick={callOpenAIAPI}>
          Get The Tweet Sentiment From OpenAI
        </button>
        {/* {sentiment !== "" ? <Plan sentiment={sentiment} /> : null} */}
      </div>
    </>
  );
};

export default Formm;
