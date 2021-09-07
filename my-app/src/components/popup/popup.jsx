import React, { useState } from 'react';
import RatingComponent from '../rating-component/rating-component';
import popup from './popup.module.scss';

const STARS_COUNT = 5;

function Popup({active, setActive}) {

  const [name, setName] = useState('');
  const [dignity, setDignity] = useState('');
  const [limitations, setLimitations] = useState('');
  const [comment, setComment] = useState('');

  function addToHistory(evt) {
    evt.preventDefault();
    const result = [...JSON.parse(localStorage.getItem('history'))];
    result.push({
      name: name,
      dignity: dignity,
      limitations: limitations,
      comment: comment,
    });
    localStorage.setItem('history', JSON.stringify(result));
    setActive(false);
    setName('');
    setDignity('');
    setLimitations('');
    setComment('');
  }

  return(
    <div className={active ? popup.wrapper_active : popup.wrapper} onClick={(e) => {
        setActive(false);
      }}>
      <div className={popup.case} onClick={(evt) => evt.stopPropagation()}>
        <h2 className={popup.header}>Оставить отзыв</h2>
        <form className={popup.form} action="/#" method="post"
          onSubmit={(evt) => {evt.preventDefault()}}
        >
          <div className={popup.form_case}>
            <div className={popup.form_wrapper}>
              <label className={popup.visually_hidden}></label>
              <input className={popup.input} type="text" placeholder="Имя"
                  value={name}
                  onChange={(evt) => {
                  const target = evt.target.value;
                  setName(target);
                }}
              />

              <label className={popup.visually_hidden}></label>
              <input className={popup.input} type="text" placeholder="Достоинства"
                onChange={(evt) => {
                  const target = evt.target.value;
                  setDignity(target);
                }}
              />

              <label className={popup.visually_hidden}></label>
              <input className={popup.input} type="text" placeholder="Недостатки"
                onChange={(evt) => {
                  const target = evt.target.value;
                  setLimitations(target);
                }}
              />
            </div>
            <div className={popup.form_container}>
              <label className={popup.rating}>Оцените товар:</label>
              <div className={popup.reting_star}
              >
               {Array.from({length: STARS_COUNT}).map((_, index) => {
                 const starNumber = STARS_COUNT - index;
                 return(
                    <RatingComponent
                      key={starNumber}
                    />
                 );
               })} 
              </div>

              <textarea className={popup.textarea} placeholder="Комментарий"
                onChange={(evt) => {
                  const target = evt.target.value;
                  setComment(target);
                }}
              />
            </div>
          </div>
          <div className={popup.button_wrapper}>
            <button className={popup.buton} onClick={addToHistory} >Оставить отзыв</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;