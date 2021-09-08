import React, { useState } from 'react';
import Popup from '../popup/popup';
import styles from './reviews.module.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

let relativeTime = require('dayjs/plugin/relativeTime')
dayjs.locale('ru');
dayjs.extend(relativeTime);

function Reviews() {
  const [modalActive, setModalActive] = useState(false);

  return(
    <div className={styles.wrapper}>
      <div className={styles.reviews}>
        <button className={styles.button} onClick={() => setModalActive(true)}>оставить отзыв</button>
      </div>
      { [...JSON.parse(localStorage.getItem('history'))].map((review, index) => {
        return (
          <div className={styles.reviews_case} key={index}>
            <div className={styles.case}>
              <div className={styles.benefits}>
                <div className={styles.pros}>
                  <p className={styles.name}>{review.name}</p>
                  <h2 className={`${styles.header} ${styles.header_dignity}`}>Достоинства</h2>
                  <p className={styles.text}>{review.dignity}</p>
                </div>
                <div className={styles.minuses}>
                  <h2 className={`${styles.header} ${styles.header_limitations}`}>Недостатки</h2>
                  <p className={styles.text}>{review.limitations}</p>
                </div>
              </div>
            </div>
            <div className={styles.comment}>
              <h2 className={styles.header_comment}>Комментарий</h2>
              <p className={styles.text_comment}>{review.comment}
              </p>
              <div className={styles.evaluation}>
                <div className={styles.rating_info}>
                  <div className={styles.rating_stars}>
                    <div className= {`${styles.rating} ${styles.rating_column}`}>
                      <span className={styles.rating_active} style={{width: `${review.rating/ 5 * 100 }%`}}></span>
                    </div>
                  </div>
                </div>
                <span className={styles.text_rating}>Советует</span>
              </div>
              <div className={styles.date_comment}>
                <time className={styles.date}>{dayjs(review.date).fromNow()}</time>
                <button className={styles.answer}>Ответить</button>
              </div>
            </div>
          </div>)
        })
      }
      <Popup active={modalActive} setActive={setModalActive}/>
    </div>
  );
}

export default Reviews;