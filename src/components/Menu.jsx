import React from 'react'
import DishCard from './DishCard'

export default function Menu({ dishes, onOrder, onSelect }) {
  return (
    <section className="menu">
      {dishes.map((d) => (
        <div key={d.id} onClick={() => onSelect?.(d)}>
          <DishCard dish={d} onOrder={() => onOrder(d)} />
        </div>
      ))}
    </section>
  )
}
