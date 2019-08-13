import React, { useState, useEffect, Fragment } from 'react';

import styles from './Earth.module.scss';

import { earthBaseUrl, apiKey } from '../../assets/urls';
import getGeolocation from '../../assets/utils/getGeolocation';

import EarthSearchForm from '../../components/EarthSearchForm/EarthSearchForm';
import Spinner from '../../components/Spinner/Spinner';

const Earth = () => {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [earthImage, setEarthImage] = useState('');
  const [earthId, setEarthId] = useState('');

  // const proxyUrl = 'https://crossorigin.me/';

  useEffect((): void => {
    getGeolocation(getInitialData);
  }, []);

  // #TODO - Add CORS for deployment.
  const getInitialData = async (lon = '100.75', lat = '1.5') => {
    const url = `${earthBaseUrl}?lon=${lon}&lat=${lat}&cloud_score=True&${apiKey}`;

    const resp = await fetch(url);
    const data = await resp.json();
    await setEarthImage(data.url);
    await setEarthId(data.id);
  };

  const searchForData = async (
    e: React.MouseEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault();

    setEarthImage('');
    setEarthId('');

    const url = `${earthBaseUrl}?lon=${lon}&lat=${lat}&cloud_score=True&${apiKey}`;
    const resp = await fetch(url);
    const data = await resp.json();

    // if not error(only err has msg)
    if (!data.msg) {
      await setEarthImage(data.url);
      await setEarthId(data.id);
    } else {
      await setEarthImage(earthImage);
      await setEarthId(earthId);
    }
  };

  return (
    <section>
      <div className={styles.earthSearchContainer}>
        <EarthSearchForm
          lat={lat}
          lon={lon}
          setLat={setLat}
          setLon={setLon}
          searchForData={searchForData}
        />
      </div>
      <div className={styles.earthImageContainer}>
        {earthImage ? (
          <Fragment>
            <img src={earthImage} alt='' />
            <p>
              <span>Location id:</span> {earthId}
            </p>
          </Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};

export default Earth;
