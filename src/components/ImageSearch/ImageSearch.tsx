import React, { useState, useEffect } from 'react';
import { imageBaseUrl } from '../../assets/urls';

import SearchForm from './SearchForm/SearchForm';

// import styles from './ImageSearch.module.scss';

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
      <div>
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
    </section>
  );
};

export default ImageSearch;
