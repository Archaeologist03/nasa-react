import React, { useState, useEffect } from 'react';
import { imageBaseUrl } from '../../assets/urls';

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

    fetch(
      `${imageBaseUrl}/search?q=${searchWord}&year_start=${searchStartYear}&year_end=${searchEndYear}`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setItems(data.collection.items);
      });
  };

  // #todo = Use custom hook for async useEffect
  useEffect(
    (searchTerm = 'moon', startingYear = '2018', endingYear = '2019'): void => {
      fetch(
        `${imageBaseUrl}/search?q=${searchTerm}&year_start=${startingYear}&year_end=${endingYear}`,
      )
        .then((resp) => resp.json())
        .then((data) => {
          setItems(data.collection.items);
          console.log(data.collection.items[0].href);
          return fetch(data.collection.items[0].href);
        })
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });
    },
    [],
  );

  let itemTitle: string;

  // need to have extra call from fetched data to fetch imgs
  // let itemImg: string;

  if (items[0]) {
    const itemsWithImg = items.filter((item) => {
      // @ts-ignore
      return item.data[0].media_type === 'image';
    });

    console.log(itemsWithImg);

    // @ts-ignore
    itemTitle = items[0].data[0].title;
  } else {
    itemTitle = '';
  }

  return (
    <section>
      <div className={styles.inputsContainer}>
        <input
          type='text'
          placeholder='Search term (moon)'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type='text'
          placeholder='Starting year (2018)'
          value={startingYear}
          onChange={(e) => setStartingYear(e.target.value)}
        />
        <input
          type='text'
          placeholder='Ending year (2019'
          value={endingYear}
          onChange={(e) => setEndingYear(e.target.value)}
        />

        <button type='submit' onClick={(e) => searchForData(e)}>
          Search
        </button>
      </div>

      <div>
        <h3>{itemTitle}</h3>
      </div>
    </section>
  );
};

export default ImageSearch;
