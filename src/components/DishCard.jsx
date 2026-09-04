import React from 'react'

export default function DishCard({ dish, onOrder }) {
  return (
    <article className="dish">
      <div className="dish-media" />
      <div className="dish-body">
        <h4>{dish.name}</h4>
        <p className="desc">{dish.desc}</p>
        <div className="meta">
          <div className="price">${dish.price.toFixed(2)}</div>
          <button className="btn" onClick={onOrder}>Order</button>
        </div>
      </div>
    </article>
  )
}
