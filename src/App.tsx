import React, { useEffect, useState } from 'react';
import './App.scss';

import Logo from './components/Logo/Logo';

const App: React.FC = () => {
  const [nasaImg, setNasaImg] = useState('');

  useEffect(() => {
    const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        setNasaImg(data.url);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header' />
      <Logo />
      <img
        alt=''
        src={nasaImg}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default App;
