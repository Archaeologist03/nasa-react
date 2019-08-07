import React from 'react';

import styles from './EarthSearchForm.module.scss';

interface IEarthSearchForm {
  lat: string;
  lon: string;
  setLat: (arg0: string) => void;
  setLon: (arg0: string) => void;
}

const EarthSearchForm = (props: IEarthSearchForm) => {
  return (
    <div className={styles.inputsContainer}>
      <input
        className='latInput'
        type='text'
        placeholder='Latitude (115.5)'
        value={props.lat}
        onChange={(e) => props.setLat(e.target.value)}
      />
      <input
        className='lonInput'
        type='text'
        placeholder='Longtitude (1.5)'
        value={props.lon}
        onChange={(e) => props.setLon(e.target.value)}
      />
      <button
        className={styles.searchBtn}
        type='submit'
        // onClick={(e) => props.searchForData(e)}
      >
        Search
      </button>
    </div>
  );
};

export default EarthSearchForm;
