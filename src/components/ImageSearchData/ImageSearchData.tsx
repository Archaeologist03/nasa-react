import React, { useState, useEffect } from 'react';

import Spinner from '../Spinner/Spinner';

import styles from './ImageSearchData.module.scss';

interface IImageSearchDataProps {
  items: {}[];
}

const ImageSearchData = ({ items }: IImageSearchDataProps) => {
  const [page, setPage] = useState(0);

  const [itemTitle, setItemTitle] = useState('');
  const [itemId, setItemId] = useState('');
  const [itemDateCreated, setItemDateCreated] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPhotographer, setItemPhotographer] = useState('');
  const [itemImage, setItemImage] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = (items: {}[]): void => {
    let itemTitle: string;
    let itemId: string;
    let itemDateCreated: string;
    let itemDescription: string;
    let itemPhotographer: string;

    // @ts-ignore
    itemTitle = items[page].data[0].title;
    // @ts-ignore
    itemId = items[page].data[0].nasa_id;
    // @ts-ignore
    itemDateCreated = items[page].data[0].date_created;
    // @ts-ignore
    itemDescription = items[page].data[0].description;
    itemPhotographer =
      // @ts-ignore
      items[page].data[0].photographer || items[page].data[0].secondary_creator;

    setItemTitle(itemTitle);
    setItemId(itemId);
    setItemDateCreated(itemDateCreated);
    setItemDescription(itemDescription);
    setItemPhotographer(itemPhotographer);
  };

  useEffect((): void => {
    // @ts-ignore
    fetch(items[page].href)
      .then((resp) => resp.json())
      .then((data) => {
        setItemImage(data[0]);
        getData(items);
      });
  }, [items, getData, page]);

  return itemImage ? (
    <section className={styles.container}>
      <div className={styles.textualDataWrapper}>
        <h3>{itemTitle}</h3>
        <h5>NASA-ID: {itemId}</h5>
        <h5>Date Created: {itemDateCreated.substring(0, 10)}</h5>
        <h5>{itemDescription}</h5>
        <h5>Taken by: {itemPhotographer}</h5>
      </div>
      <img className={styles.itemImage} src={itemImage} alt='' />
    </section>
  ) : (
    <Spinner />
  );
};

export default ImageSearchData;
