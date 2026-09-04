import React, { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import DishModal from './components/DishModal'

const sampleDishes = [
  { id: 1, name: 'Margherita', desc: 'Tomato, mozzarella, basil', price: 9.5, img: '' },
  { id: 2, name: 'Truffle Pasta', desc: 'Cream, truffle oil, parmesan', price: 14.0, img: '' },
  { id: 3, name: 'Caesar Salad', desc: 'Crisp romaine, anchovy dressing', price: 8.0, img: '' },
  { id: 4, name: 'Chocolate Lava', desc: 'Warm cake, molten center', price: 7.0, img: '' }
]

export default function App() {
  const [cart, setCart] = useState([])

  const [selected, setSelected] = useState(null)

  const selectDish = (dish) => setSelected(dish)

  const addToCart = (dish) => {
    setCart((c) => {
      const found = c.find((x) => x.id === dish.id)
      if (found) return c.map((x) => (x.id === dish.id ? { ...x, qty: x.qty + 1 } : x))
      return [...c, { ...dish, qty: 1 }]
    })
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2)

  return (
    <div className="app-root">
      <Header cartCount={cart.length} total={total} />
      <main className="container">
        <section className="hero">
          <h1>Welcome to The Modern Restaurent</h1>
          <p>Bold flavors · Seasonal ingredients · Crafted with care</p>
        </section>
        <div className="content">
          <Menu dishes={sampleDishes} onOrder={addToCart} onSelect={selectDish} />
          <aside className="cart">
            <h3>Your Order</h3>
            {cart.length === 0 ? <p>Cart is empty</p> : (
              <ul>
                {cart.map((it) => (
                  <li key={it.id}>{it.name} × {it.qty} — ${ (it.price * it.qty).toFixed(2) }</li>
                ))}
              </ul>
            )}
            <div className="total">Total: ${total}</div>
          </aside>
        </div>
        {selected && <DishModal dish={selected} onClose={() => setSelected(null)} onOrder={() => { addToCart(selected); setSelected(null) }} />}
      </main>
    </div>
  )
}
