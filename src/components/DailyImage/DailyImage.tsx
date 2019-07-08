import React, { useEffect, useState } from 'react';
import { apodBaseUrl, apiKey } from '../../assets/urls';

import styles from './DailyImage.module.scss';

const DailyImage: React.FC = () => {
  const [dailyImage, setDailyImage] = useState('');

  useEffect(() => {
    fetch(`${apodBaseUrl}?${apiKey}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        setDailyImage(data.url);
      });
  }, []);
  return (
    <section>
      <div>
        <img src={dailyImage} alt='' className={styles.image} />
      </div>
    </section>
  );
};

export default DailyImage;
