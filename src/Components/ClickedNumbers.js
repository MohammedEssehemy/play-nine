import React from 'react';
import styles from './ClickedNumbers.module.css';


export default ({ numbers, handleNoClick }) => {
  return (
    <>
    {
      numbers.map(n =>
        (
          <button
          className={styles.number}
          type="button"
          onClick={handleNoClick}
          value={n}
          key={n}
          >
          {n}
          </button>
        ))
    }
  </>
)
}
