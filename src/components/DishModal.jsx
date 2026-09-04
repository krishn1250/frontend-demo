import React from 'react'

export default function DishModal({ dish, onClose, onOrder }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>
        <div className="modal-media" />
        <h3>{dish.name}</h3>
        <p className="desc">{dish.desc}</p>
        <div className="meta">
          <div className="price">${dish.price.toFixed(2)}</div>
          <button className="btn" onClick={onOrder}>Add to order</button>
        </div>
      </div>
    </div>
  )
}
