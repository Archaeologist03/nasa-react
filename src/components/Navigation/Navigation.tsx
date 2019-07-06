import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  return (
    <Router>
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
              Earth
            </Link>
          </li>
        </ul>
      </nav>

      {/* <Route path='/' exact component={} />
      <Route path='/images/' component={} /> */}
      <Route path='/earth/' render={() => <p> hihihihi</p>} />
    </Router>
  );
};

export default Navigation;
