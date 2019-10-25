import React from 'react';
import styles from './Stars.module.css'


const Stars = ({ noOfStars }) => {
  return (
    <>
    {
      Array.from({length: noOfStars})
       .map(s => <span aria-label="star" role="img" key={s} className={styles.star}> ⭐️ </span>)
    }
    </>
  );
}


export default Stars;
