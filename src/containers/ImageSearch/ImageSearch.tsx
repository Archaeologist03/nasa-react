import React, { useState, useEffect } from 'react';
import { imageBaseUrl } from '../../assets/urls';

import SearchForm from '../../components/SearchForm/SearchForm';
import ImageSearchData from '../../components/ImageSearchData/ImageSearchData';

import styles from './ImageSearch.module.scss';

// #TODO --- Add PAGINATION for extra results(prev,next)

const ImageSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [startingYear, setStartingYear] = useState('');
  const [endingYear, setEndingYear] = useState('');
  const [items, setItems] = useState([]);

  const searchForData = async (
    e: React.MouseEvent<HTMLElement>,
  ): Promise<void> => {
    e.preventDefault();

    const searchWord: string = searchTerm ? searchTerm : 'moon';
    const searchStartYear: string = startingYear ? startingYear : '2018';
    const searchEndYear: string = endingYear ? endingYear : '2019';

    const response = await fetch(
      `${imageBaseUrl}/search?q=${searchWord}&year_start=${searchStartYear}&year_end=${searchEndYear}`,
    );
    const data = await response.json();
    const onlyImgsItems = onlyDataWithImgs(data.collection.items);
    setItems(onlyImgsItems);
  };

  // #todo = Use custom hook for async useEffect
  useEffect(
    (searchTerm = 'moon', startingYear = '2018', endingYear = '2019'): void => {
      fetch(
        `${imageBaseUrl}/search?q=${searchTerm}&year_start=${startingYear}&year_end=${endingYear}`,
      )
        .then((resp) => resp.json())
        .then((data) => {
          const onlyImgsItems = onlyDataWithImgs(data.collection.items);
          setItems(onlyImgsItems);
        });
    },
    [],
  );

  const onlyDataWithImgs = (items: []) => {
    // @ts-ignore
    return items.filter((item) => item.data[0].media_type === 'image');
  };

  return (
    <section>
      <div className={styles.searchFormContainer}>
        <SearchForm
          searchTerm={searchTerm}
          startingYear={startingYear}
          endingYear={endingYear}
          setSearchTerm={setSearchTerm}
          setStartingYear={setStartingYear}
          setEndingYear={setEndingYear}
          searchForData={searchForData}
        />
      </div>
      <div className={styles.imageSearchDataContainer}>
        {items[0] ? <ImageSearchData items={items} /> : null}
      </div>
    </section>
  );
};

export default ImageSearch;
