import React from 'react';
import styles from './feature.module.scss';

function Feature() {
  return(
    <ul className={styles.list}>
      <li className={styles.item}>
        <p className={styles.text}>Трансмиссия</p>
        <p className={styles.text}>Роботизированная</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Мощность двигателя, л.с.</p>
        <p className={styles.text}>249</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Тип двигателя</p>
        <p className={styles.text}>Бензиновый</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Привод</p>
        <p className={styles.text}>Полный</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Объем двигателя, л</p>
        <p className={styles.text}>2.4</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Макс. крутящий момент</p>
        <p className={styles.text}>370/4500</p>
      </li>
      <li className={styles.item}>
        <p className={styles.text}>Количество цилиндров</p>
        <p className={styles.text}>4</p>
      </li>
    </ul>
  );
}

export default Feature;