import React, { useState } from 'react';
import styles from './main.module.scss';
import car from '../../img/car.png';
import salon from '../../img/salon.png'
import speedometr from '../../img/speedometr.png';
import styles_app from '../app/app.module.scss';
import styles_description from './description-product.module.scss';
import Specifications from '../specifications/specifications';
import left from '../../img/left.svg';
import left_active from '../../img/left-active.svg';
import right from '../../img/right.svg';
import right_active from '../../img/right-active.svg';

function Main() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [car,salon,speedometr];

  return(
    <main>
    <h1 className={styles_app.hidden}>Автомобили</h1>
      <section className={styles.description}>
        <div className={styles.gallery}>
          
          <div className={styles.container}>
            <div className={styles.image_wrapper}>
              <div className={styles.image_mark}>
                <span className={styles.image_mark_text}>new model</span>
              </div>
              <div className={styles.huge}>
                <img src={images[currentImageIndex]} width="600" height="375" alt=""/>
              </div>

              <div className={styles.image_list}>
                <button onClick={() => setCurrentImageIndex(currentImageIndex - 1)} className={styles.swiper_left} disabled={currentImageIndex === 0}>
                  <img src={(currentImageIndex === 0) ? left : left_active} alt="left"/>
                </button>
                <ul className={styles.gallery_list}>
                  {images.map((image, index) => {
                    return(
                    <li key={index} className={styles.gallery_item}>
                      <img src={image} alt="" width="125" height="80"/>
                    </li>
                    );
                  })}
                </ul>
                <button onClick={() => setCurrentImageIndex(currentImageIndex + 1)} className={styles.swiper_right} disabled={currentImageIndex === images.length - 1}>
                  <img src={(currentImageIndex === images.length - 1) ? right_active : right} alt="left"/>
                </button>
              </div>
            </div>

            <div className={styles_description.case}>
              <h2 className={styles_description.header}>Марпех 11</h2>
              <ul className={styles_description.list}>
                <li className={styles_description.item}>бензин</li>
                <li className={styles_description.item}>механика</li>
                <li className={styles_description.item}>100 л.с.</li>
                <li className={styles_description.item}>1.4 л</li>
              </ul>
              <div className={styles_description.sale}>
                <p className={styles_description.price}>2 300 000 ₽</p>
                <p className={styles_description.price_modificate}>2  400 000 ₽</p>
              </div>
              <div className={styles_description.button}>
                <button className={styles_description.application}>оставить заявку</button>
                <button className={styles_description.credit}>в кредит от 11 000 ₽</button>
              </div>
            </div>
          </div>

          

        </div>
      </section>
      <Specifications/>
    </main>
  );
}

export default Main;