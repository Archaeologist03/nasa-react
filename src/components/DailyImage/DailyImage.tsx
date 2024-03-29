import React, { useEffect, useState } from 'react';
import { apodBaseUrl, apiKey } from '../../assets/urls';

import styles from './DailyImage.module.scss';

const DailyImage: React.FC = () => {
  const [dailyImageUrl, setDailyImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [copyright, setCopyright] = useState('');
  const [mediaType, setMediaType] = useState('');

  useEffect(() => {
    fetch(`${apodBaseUrl}?${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        setDailyImageUrl(data.url);
        setTitle(data.title);
        setCopyright(data.copyright);
        setMediaType(data.media_type);
      });
  }, []);

  const video = (
    <iframe
      title='nasa daily video'
      className={styles.image}
      width='420'
      height='315'
      src={dailyImageUrl}></iframe>
  );
  const image = <img src={dailyImageUrl} alt='' className={styles.image} />;

  return (
    <section className={styles.dailyImageContainer}>
      <div>{mediaType === 'video' ? video : image}</div>

      <div className={styles.titleContainer}>
        <h3>{title}</h3>
      </div>
      <div className={styles.copyrightContainer}>
        {copyright ? <p>By: {copyright}</p> : null}
      </div>
    </section>
  );
};

export default DailyImage;
