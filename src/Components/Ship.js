import React from 'react';
import styles from './Ship.module.css'


const Ship = ({noOfStars, successNumbers, handleNoClick, allNumbers}) => {
  return (
    <>
    {
      allNumbers.map(n => {
      const isSuccess = successNumbers.includes(n);
      return (
        <button
        disabled={isSuccess}
        className={isSuccess? styles.numberDisabled: styles.numberActive}
        onClick={handleNoClick}
        type="button"
        value={n}
        key={n}
        >
        {n}
        </button>
      )
  })}
    </>
  );

};


export default Ship;
