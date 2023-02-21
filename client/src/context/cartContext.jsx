import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  const addToCart = (item, qty) => {
    const newCart = [...cart]
    const itemIndex = newCart.findIndex(i => i.id === item.id)

    if (itemIndex !== -1) {
      // Item already exists in cart, update the quantity of that item
      const updatedCart = [...newCart]
      updatedCart[itemIndex].attributes.qty += qty
      setCart(updatedCart)
    } else {
      // Item does not exist in cart, add the new item
      setCart(prevState => {
        item.attributes.qty = qty
        return [...prevState, item]
      })
    }
  }

  const deleteItem = item =>
    setCart(prevState => {
      const updatedCart = [...prevState].filter(i => i.id !== item.id)
      return updatedCart
    })

  const resetCart = () => {
    localStorage.clear()
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteItem, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}
