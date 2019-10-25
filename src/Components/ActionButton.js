import React from 'react';



const ActionButton = ({handleClick, content}) => {
  return (
    <button className="action-button" onClick={handleClick}>  {content}  </button>
  )
}



export default ActionButton;
