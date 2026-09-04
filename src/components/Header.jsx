import React from 'react'

export default function Header({ cartCount, total }) {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo">🍽️</div>
        <div>
          <h2>The Modern Restaurent</h2>
          <div className="tag">Flavor-forward dining</div>
        </div>
      </div>
      <div className="cart-info">{cartCount} items — ${total}</div>
    </header>
  )
}
