import React from 'react';

import styles from './Logo.module.scss';
import nasaLogoImg from '../../assets/images/icons8-nasa.svg';

const Logo = () => {
  return (
    <div className={styles.logoStyle}>
      <img alt='' src={nasaLogoImg} />
    </div>
  );
};

export default Logo;
