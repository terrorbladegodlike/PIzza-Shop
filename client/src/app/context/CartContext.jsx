'use client'
import React, { createContext, useState } from 'react'

// Create Context
export const CartContext = createContext()

const CartProvider = ({ children }) => {

  // Cart Open State
  const [isOpen, setIsOpen] = useState(false)

  // Cart State
  const [cart, setCart] = useState([])

  // Add To Cart
  const addToCart = (id, image, name, price, additionalTopping, size, crust) => {

    // Sort AdditionalTopping Array By Name
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name))

    const newItem = {
      id, image, name, price, additionalTopping, size, crust, amount: 1
    }

    setCart([...cart, newItem])
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider