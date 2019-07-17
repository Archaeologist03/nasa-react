import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <div>
      <div className={styles.pagination}>
        <input id='dot-1' type='radio' name='dots' />
        <label htmlFor='dot-1'></label>
        <input id='dot-2' type='radio' name='dots' />
        <label htmlFor='dot-2'></label>

        <div className={styles.pacman}></div>
      </div>
    </div>
  );
};

export default Pagination;
