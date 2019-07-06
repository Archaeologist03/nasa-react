import React, { useEffect, useState } from 'react';
import './App.scss';

import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

import { apodBaseUrl, apiKey } from './assets/urls';

const App: React.FC = () => {
  const [nasaImg, setNasaImg] = useState('');

  useEffect(() => {
    fetch(`${apodBaseUrl}?${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        setNasaImg(data.url);
      });
  }, []);

  return (
    <div className='App'>
      <header className='App-header' />
      <Logo />
      <Navigation />
      <img
        alt=''
        src={nasaImg}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
    </div>
  );
};

export default App;
