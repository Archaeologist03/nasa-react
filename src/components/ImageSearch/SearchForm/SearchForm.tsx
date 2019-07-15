import React from 'react';

import styles from './SearchForm.module.scss';

// just rebase cheeck 2.. on branch.
// just rebase cheeck 3.. on branch.

interface ISearchFormProps {
  searchTerm: string;
  startingYear: string;
  endingYear: string;
  setSearchTerm: (arg0: string) => void;
  setStartingYear: (arg0: string) => void;
  setEndingYear: (arg0: string) => void;
  searchForData: (e: React.MouseEvent<HTMLElement>) => void;
}

const SearchForm = (props: ISearchFormProps) => {
  return (
    <div className={styles.inputsContainer}>
      <input
        className='searchTermInput'
        type='text'
        placeholder='Search term (moon)'
        value={props.searchTerm}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
      <input
        className='startingYearInput'
        type='text'
        placeholder='Starting year (2018)'
        value={props.startingYear}
        onChange={(e) => props.setStartingYear(e.target.value)}
      />
      <input
        className='endingYearInput'
        type='text'
        placeholder='Ending year (2019'
        value={props.endingYear}
        onChange={(e) => props.setEndingYear(e.target.value)}
      />

      <button
        className={styles.searchBtn}
        type='submit'
        onClick={(e) => props.searchForData(e)}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
