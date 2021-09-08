import React, { useState } from 'react';
import RatingComponent from '../rating-component/rating-component';
import popup from './popup.module.scss';
import dayjs from 'dayjs';

const STARS_COUNT = 5;

function Popup({active, setActive}) {

  const [name, setName] = useState('');
  const [dignity, setDignity] = useState('');
  const [limitations, setLimitations] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  // validation
  const [nameDirty, setNameDirty] = useState(false);
  const [commentDirty, setCommentDirty] = useState(false);
  const nameValidError = 'Пожалуйста, заполните поле';
  const commentError = 'Пожалуйста, заполните поле';

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'name':
       setNameDirty(name.length === 0);
       break;
      case 'textarea':
        setCommentDirty(comment.length === 0);
        break;
      default:
        setNameDirty(false);
        setCommentDirty(false);
    }
  }

  const handleChangeRating = (value) => {
    setRating(Number(value));
  }

  function clearForm() {
    setActive(false);
    setName('');
    setDignity('');
    setLimitations('');
    setComment('');
    setRating(0);
    setCommentDirty(false);
    setNameDirty(false)
  }

  function addToHistory(evt) {
    evt.preventDefault();
    if(name.length > 2 && comment.length > 10) {
      const result = [...JSON.parse(localStorage.getItem('history'))];
      result.push({
        name: name,
        dignity: dignity,
        limitations: limitations,
        comment: comment,
        rating: rating,
        date: dayjs(),
      });
      localStorage.setItem('history', JSON.stringify(result));
      clearForm();
    }
  }

  return(
    <div className={active ? popup.wrapper_active : popup.wrapper} onClick={(e) => {
        clearForm();
      }}>
      <div className={popup.case} onClick={(evt) => evt.stopPropagation()}>
        <h2 className={popup.header}>Оставить отзыв</h2>
        <form className={popup.form} action="/#" method="post"
          onSubmit={(evt) => {evt.preventDefault()}}
        >
          <div className={popup.form_case}>
            <div className={popup.form_wrapper}>
              <label className={popup.error}>{(nameDirty) ? nameValidError : ''}</label>
              <input className={`${popup.input} ${(nameDirty) ? popup.dirty_error : ''}`} 
                  type="text"
                  placeholder="Имя"
                  name="name"
                  value={name}
                  onBlur={(e) => blurHandler(e)}
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
              <div className={popup.rating_case}>
                <label className={popup.rating}>Оцените товар:</label>
                <div className={popup.rating_star}
                  onChange={(evt) => {
                    const target = evt.target.value;
                    setRating(Number(target));
                  }}
                >
                {Array.from({length: STARS_COUNT}).map((_, index) => {
                  const starNumber = STARS_COUNT - index;
                  return(
                      <RatingComponent
                        key={starNumber}
                        starNumber={starNumber}
                        userRating={rating}
                        handleChangeRating={handleChangeRating}
                      />
                  );
                })} 
                </div>
              </div>
              <label className={popup.error}>{(commentDirty) ? commentError : ''}</label>
              <textarea className={popup.textarea} 
                placeholder="Комментарий"
                name="textarea"
                value={comment}
                onBlur={(e) => blurHandler(e)}
                onChange={(evt) => {
                  const target = evt.target.value;
                  setComment(target);
                }}
              />
            </div>
          </div>
          <div className={popup.button_wrapper}>
            <button 
              className={popup.button} 
              onClick={addToHistory}
            >Оставить отзыв</button>
          </div>
          <button 
            className={popup.close} onClick={() => {
              clearForm();
            }}
            type="button" 
            aria-label="закрыть"></button>
        </form>
      </div>
    </div>
  );
}

export default Popup;