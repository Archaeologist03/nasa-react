import React, { useState, useEffect } from 'react';

import styles from './Earth.module.scss';

import { earthBaseUrl, apiKey } from '../../assets/urls';

import EarthSearchForm from '../../components/EarthSearchForm/EarthSearchForm';

const Earth = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
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
      <div className={styles.earthSearchContainer}>
        <EarthSearchForm lat={lat} lon={lon} setLat={setLat} setLon={setLon} />
      </div>
      <img src={earthImage} alt='' />
    </section>
  );
};

export default Earth;
