import React, { useEffect, useState } from 'react';
import { apodBaseUrl, apiKey } from '../../assets/urls';

import styles from './DailyImage.module.scss';

const DailyImage: React.FC = () => {
  const [dailyImage, setDailyImage] = useState('');
  const [title, setTitle] = useState('');
  const [copyright, setCopyright] = useState('');

  useEffect(() => {
    fetch(`${apodBaseUrl}?${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setDailyImage(data.url);
        setTitle(data.title);
        setCopyright(data.copyright);
      });
  }, []);

  return (
    <section>
      <div>
        <img src={dailyImage} alt='' className={styles.image} />
      </div>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
      </div>
      <div className={styles.copyrightContainer}>
        <p>By: {copyright}</p>
      </div>
    </section>
  );
};

export default DailyImage;
