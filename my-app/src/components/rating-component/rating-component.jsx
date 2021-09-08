import React from 'react';
import rating from './rating.module.scss'

function RatingComponent({starNumber, handleChangeRating, userRating}) {
  return(
    <>
      <input className={rating.visually_hidden}
        value={starNumber}
        type="radio"
        id={starNumber}
        checked={starNumber === rating}
        onChange={() => handleChangeRating(starNumber)}
      />
      <label className={rating.label} htmlFor={starNumber}>
        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={rating.image} d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
        </svg>
      </label>
    </>
  );
}

export default RatingComponent;