import React, { useState } from 'react';
import Popup from '../popup/popup';
import styles from './reviews.module.scss';

function Reviews() {
  const [modalActive, setModalActive] = useState(false);

  function addReview(review) {

  } 

  return(
    <div className={styles.wrapper}>
      <div className={styles.reviews}>
        <button className={styles.button} onClick={() => setModalActive(true)}>оставить отзыв</button>
      </div>
      { [...JSON.parse(localStorage.getItem('history'))].map((review, index) => {
        return (
          <div key={index}>
            <div className={styles.case}>
              <div className={styles.benefits}>
                <div className={styles.pros}>
                  <p className={styles.name}>{review.name}</p>
                  <h2 className={styles.header}>Достоинства</h2>
                  <p className={styles.text}>{review.dignity}</p>
                </div>
                <div className={styles.minuses}>
                  <h2 className={styles.header}>Недостатки</h2>
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
                    <div className={styles.rating}>
                      {/* <span style={"width: 60%;"}></span> */}
                    </div>
                  </div>
                </div>
                <span className={styles.text_rating}>Советует</span>
              </div>
              <p className={styles.date}>1 минуту назад</p>
              <p className={styles.answer}>Ответить</p>
            </div>
          </div>)
        })
      }
      <Popup active={modalActive} setActive={setModalActive} addReview={addReview}/>
    </div>
  );
}

export default Reviews;