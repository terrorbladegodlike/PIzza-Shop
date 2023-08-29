'use client'
import React, { createContext, useEffect, useState } from 'react'

// Create Context
export const CartContext = createContext()

const CartProvider = ({ children }) => {

  // Cart Open State
  const [isOpen, setIsOpen] = useState(false)

  // Cart State
  const [cart, setCart] = useState([])

  // Cart Total State
  const [cartTotal, setCartTotal] = useState(0)

  // Item Amount State
  const [itemAmount, setItemAmount] = useState(0)

  // Update Item Amount
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount
    }, 0)
    setItemAmount(amount)
  })

  // Update Cart Total
  useEffect(() => {
    const price = cart.reduce((a, c) => {
      return a + Number(c.price) * c.amount
    }, 0)
    setCartTotal(price)
  }, [cart])

  // Add To Cart
  const addToCart = (id, image, name, price, additionalTopping, size, crust) => {

    // Sort AdditionalTopping Array By Name
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name))

    const newItem = {
      id, image, name, price, additionalTopping, size, crust, amount: 1
    }

    const cartItemIndex = cart.findIndex((item) =>
      item.id === id &&
      item.price === price &&
      item.size === size &&
      // Check if additionalTopping array is equal
      JSON.stringify(item.additionalTopping) === JSON.stringify(additionalTopping) && item.crust === crust
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItem])
    } else {
      const newCart = [...cart]
      newCart[cartItemIndex].amount += 1
      setCart(newCart)
    }


    // Open The Cart Everytime you add a product
    setIsOpen(true)
  }

  // Remove item
  const removeItem = (id, price, crust) => {
    const itemIndex = cart.findIndex((item) => item.id === id && item.price === price && item.crust === crust)
    if (itemIndex !== -1) {
      const newCart = [...cart]
      newCart.splice(itemIndex, 1)
      setCart(newCart)
    }
  }

  // Increase amount
  const increaseAmount = (id, price) => {
    const itemIndex = cart.findIndex((item) => item.id === id && item.price === price);

    if (itemIndex !== -1) {
      const newCart = [...cart]
      newCart[itemIndex].amount += 1
      setCart(newCart)
    }
  };

  // Decrease amount
  const decreaseAmount = (id, price) => {
    const itemIndex = cart.findIndex((item) => item.id === id && item.price === price)

    if (itemIndex !== -1) {
      const newCart = [...cart]
      if (newCart[itemIndex].amount > 1) {
        newCart[itemIndex].amount -= 1
      }
      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, cart, setCart, removeItem, increaseAmount, decreaseAmount, itemAmount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider