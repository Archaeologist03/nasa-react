import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link className={`${styles.home} ${styles.navLink}`} to='/'>
            Daily Image - Home
          </Link>
        </li>
        <li>
          <Link className={`${styles.search} ${styles.navLink}`} to='/images'>
            Images - Search
          </Link>
        </li>
        <li>
          <Link className={`${styles.earth} ${styles.navLink}`} to='/earth'>
            Earth - Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
