import React, { useState, useEffect } from 'react';

import { earthBaseUrl, apiKey } from '../../assets/urls';

const Earth = () => {
  const [earthImage, setEarthImage] = useState('');

  useEffect((lon = '100.75', lat = '1.5'): void => {
    fetch(`${earthBaseUrl}?lon=${lon}&lat=${lat}&cloud_score=True&${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, 111);
        setEarthImage(data.url);
      });
  }, []);

  return (
    <section>
      <img src={earthImage} alt='' />
    </section>
  );
};

export default Earth;
