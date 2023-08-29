'use client'
import React, { useContext } from 'react'

// Conponent
import { CartContext } from '../context/CartContext'

// Import Icons
import { BsHandbagFill } from 'react-icons/bs'

const CartMobileIcon = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)
  return (
    <div onClick={() => setIsOpen(!isOpen)} className='bg-tertiary w-[72px] h-[72px] rounded-full flex justify-center items-center text-white cursor-pointer fixed right-[10%] bottom-[5%] z-20 lg:hidden'>
      <BsHandbagFill className='text-4xl' />
      {/* Amount */}
      <span className='absolute text-white bottom-3 right-4 gradient w-5 h-5 flex justify-center items-center rounded-full font-robotoCondensed text-[13px]'>
        {itemAmount}
      </span>
    </div>
  )
}

export default CartMobileIcon