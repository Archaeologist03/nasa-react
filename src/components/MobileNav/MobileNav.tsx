import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MobileNav.module.scss';

const MobileMenu = () => {
  return (
    <nav>
      <div className={styles.menuToggle}>
        <input type='checkbox' />

        <span></span>
        <span></span>
        <span></span>

        <ul className={styles.menu}>
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
        {/* 
        <ul className={styles.menu}>
          <a href='#'>
            <li>Home</li>
          </a>
          <a href='#'>
            <li>About</li>
          </a>
          <a href='#'>
            <li>Home</li>
          </a>
          <a href='#'>
            <li>About</li>
          </a>
        </ul> */}
      </div>
    </nav>
  );
};

export default MobileMenu;
