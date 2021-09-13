import React, { useEffect, useState } from 'react';
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if(name.length > 0 && comment.length > 0) {
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
    } else {
      setNameDirty(name.length === 0);
      setCommentDirty(comment.length === 0);
    }
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = active ? 'hidden' : 'auto';

    const handleEsc = (event) => {
      if (event.keyCode === 27 || event.keyCode === 88) {
        clearForm();
     }
   };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [active, clearForm]);

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
              <label htmlFor="name" className={`${popup.error} ${popup.icon_name}`}>{(nameDirty) ? nameValidError : ''}</label>
              <input className={`${popup.input} ${(nameDirty) ? popup.dirty_error : ''}`} 
                  type="text"
                  placeholder="Имя"
                  name="name"
                  id="name"
                  value={name}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(evt) => {
                  const target = evt.target.value;
                  setName(target);
                }}
              />

              <label htmlFor="worth" className={popup.visually_hidden}></label>
              <input className={popup.input}
                type="text"
                id="worth"
                value={dignity}
                placeholder="Достоинства"
                onChange={(evt) => {
                  const target = evt.target.value;
                  setDignity(target);
                }}
              />

              <label htmlFor="limitations" className={popup.visually_hidden}></label>
              <input className={popup.input}
                type="text"
                placeholder="Недостатки"
                id="limitations"
                value={limitations}
                onChange={(evt) => {
                  const target = evt.target.value;
                  setLimitations(target);
                }}
              />
            </div>

            <div className={popup.form_container}>
              <div className={popup.rating_case}>
                <label htmlFor="starNumber" className={popup.rating}>Оцените товар:</label>
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
              <label htmlFor="textarea" className={popup.error}>{(commentDirty) ? commentError : ''}</label>
              <textarea className={`${popup.textarea} ${(commentDirty) ? popup.dirty_error : ''}`} 
                placeholder="Комментарий"
                name="textarea"
                id="textarea"
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