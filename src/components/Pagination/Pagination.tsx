import React from 'react';

import styles from './Pagination.module.scss';

interface IPaginationProps {
  items: any;
  page: number;
  setPage: Function;
}

const Pagination = ({ items, page, setPage }: IPaginationProps) => {
  // set Previous Page
  const prevPage = (): void => {
    if (page === 0) {
      setPage(items.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  // set Next Page
  const nextPage = (): void => {
    if (page === items.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        onClick={() => prevPage()}
        className={`${styles.leftArrow} ${styles.arrow}`}>
        <span>&#8672;</span>
      </button>
      <button
        onClick={() => nextPage()}
        className={`${styles.rightArrow} ${styles.arrow}`}>
        <span>&#8674;</span>
      </button>
    </div>
  );
};

export default Pagination;
