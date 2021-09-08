import React, { useState } from 'react';
import styles from './main.module.scss';
import car from '../../img/car.png';
import salon from '../../img/salon.png'
import speedometr from '../../img/speedometr.png';
import styles_app from '../app/app.module.scss';
import styles_description from './description-product.module.scss';
import Specifications from '../specifications/specifications';

let imagesSrc = [car,salon,speedometr, car,salon,speedometr];

function Main() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState(imagesSrc);

  function rotate(direction) {
    if(direction === 1) {
      if(currentImageIndex < images.length - 3) {
        let newImages = [...images];
        const image = newImages.shift();
        newImages.push(image);
        setImages(newImages);
      }
    } else {
      if(currentImageIndex > 0) {
        let newImages = [...images];
        const image = newImages.pop();
        newImages.unshift(image);
        setImages(newImages);
      }
    }
    setCurrentImageIndex(currentImageIndex + direction);
  }
  return(
    <main className="main">
    <h1 className={styles_app.hidden}>Автомобили</h1>
      <section className="description">
        <div className={styles.gallery}>
          
          <div className={styles.container}>
            <div className={styles.image_wrapper}>
              <div className={styles.image_mark}>
                <span className={styles.image_mark_text}>new model</span>
              </div>
              <div className={styles.huge}>
                <img className="gallety__huge-image" src={images[currentImageIndex]} width="600" height="375" alt=""/>
              </div>

              <div className={styles.image_list}>
                <button onClick={() => rotate(-1)} className={styles.swiper_left} disabled={currentImageIndex === 0}>
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26" cy="26" r="25.5" fill="white" stroke="#D7D9DF"/>
                    <path d="M17.0043 26.1719L22.9184 20.3686M17.0043 26.1719L22.6929 31.9692M17.0043 26.1719L35.9813 26.3513" stroke={(currentImageIndex === 0) ? "#D7D9DF" : "#48494D"}/>
                  </svg>
                </button>
                <ul className={styles.gallery_list}>
                  {images.slice(0,3).map((image, index) => {
                    return(
                    <li key={index} className={styles.gallery_item}>
                      <img className="gallety__item-image" src={image} alt="" width="125" height="80"/>
                    </li>
                    );
                  })}
                </ul>
                <button onClick={() => rotate(1)} className={styles.swiper_right} disabled={currentImageIndex === images.length - 1}>
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.500408 26C0.500408 40.0834 11.9143 51.5 25.9939 51.5C40.0734 51.5 51.4873 40.0834 51.4873 26C51.4873 11.9166 40.0734 0.5 25.9939 0.5C11.9143 0.5 0.500408 11.9166 0.500408 26Z" fill="white" stroke="#D7D9DF"/>
                    <path d="M34.9873 26.1719L29.0747 20.3686M34.9873 26.1719L29.3001 31.9692M34.9873 26.1719L16.0151 26.3513" stroke={(currentImageIndex === images.length - 1) ? "#D7D9DF" : "#48494D"}/>
                  </svg>
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