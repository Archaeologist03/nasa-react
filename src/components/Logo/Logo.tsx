import React from 'react';

import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logoStyle}>
      <img
        alt=''
        src='https://worldwind.arc.nasa.gov/agrosphere/images/nasa.gif'
      />
    </div>
  );
};

export default Logo;
