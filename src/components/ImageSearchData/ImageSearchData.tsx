import React, { useState, useEffect } from 'react';

import getJpg from '../../assets/utils/getJpg';

import Spinner from '../Spinner/Spinner';

import styles from './ImageSearchData.module.scss';

interface IImageSearchDataProps {
  items: {}[];
  page: number;
}

const ImageSearchData = ({ page, items }: IImageSearchDataProps) => {
  const [itemTitle, setItemTitle] = useState('');
  const [itemId, setItemId] = useState('');
  const [itemDateCreated, setItemDateCreated] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPhotographer, setItemPhotographer] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [spinNewData, setSpinNewData] = useState(false);

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

  // Get Image
  useEffect((): void => {
    setSpinNewData(true);

    // @ts-ignore
    fetch(items[page].href)
      .then((resp) => resp.json())
      .then((data) => {
        setItemImage(getJpg(data));
        getData(items);
        setSpinNewData(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, page]);

  return !itemImage && spinNewData ? (
    <Spinner />
  ) : (
    <section className={styles.container}>
      <div className={styles.textualDataWrapper}>
        <h3 className={styles.title}>{itemTitle}</h3>
        <p className={styles.description}>{itemDescription}</p>
        <h5 className={styles.itemId}>
          <span>NASA-ID:</span> {itemId}
        </h5>
        <h5>
          <span>Date Created: </span> {itemDateCreated.substring(0, 10)}
        </h5>
        <h5>
          <span>Taken by:</span> {itemPhotographer}
        </h5>
      </div>
      <img className={styles.itemImage} src={itemImage} alt='' />
    </section>
  );
};

export default ImageSearchData;
