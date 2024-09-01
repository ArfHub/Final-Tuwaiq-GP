import React, { useState } from 'react';

const Photo = () => {
  const [cityName, setCityName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.API_KEY;

  const fetchCityImage = async () => {
    if (!cityName) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');
    setPhotoUrl('');

    const prompt = `Generate a beautiful image of the city ${cityName}.`;
    const APIBody = {
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    };

    try {
      const response = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify(APIBody),
        }
      );

      if (!response.ok) {
        const error = await response.text();
        console.error('Error fetching image:', error);
        setError('Error fetching photo. Please try again.');
        return;
      }

      const data = await response.json();
      if (data && data.data && data.data.length > 0) {
        setPhotoUrl(data.data[0].url);
      } else {
        setError('No photo found.');
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      setError('Error fetching photo. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={fetchCityImage} className="btn btn-primary">
        Generate Photo
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {photoUrl && <img src={photoUrl} alt={`View of ${cityName}`} />}
    </div>
  );
};

export default Photo;
