'use client'
import React, { useContext } from 'react'

// Import Context
import { CartContext } from '../context/CartContext'

// Import Components
import CartTop from './CartTop'
import CartBottom from './CartBottom'
import CartItem from './CartItem'

const CartMobile = () => {
  const { cart, isOpen } = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'bottom-0' : 'bottom-full'} bg-white fixed w-full h-full left-0 z-20 transition-all duration-300 flex flex-col md:hidden`}>
      {/* Top */}
      <CartTop />
      {/* Cart Items */}
      <div className={`${cart.length >= 3 ? 'scrollbar-track-black/10' : 'scrollbar-track-transparent'} px-4 flex flex-col gap-y-4 py-2 mr-4 mt-8 h-[60vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary`}>
        {cart?.map((pizza, index) => {
          return <CartItem pizza={pizza} key={index} />
        })}
      </div>
      {/* Cart Bottom */}
      <CartBottom />
    </div>
  )
}

export default CartMobile