import React from 'react'
//receive label-filled-onclick-isDisable from app.js- we destrucutr it line 3 {label}
const CellComponent = ({label, filled, onClick, isDisable}) => {
  return (
    <div>
      <button
      type='button'
      area-label = {label}
      disabled = {isDisable}
      onClick ={onClick}
      className={filled ? 'cell  cell-activated' : 'cell '}
      />
    </div>
  )
}

export default CellComponent
