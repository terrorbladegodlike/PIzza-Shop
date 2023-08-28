import React from 'react'

// Next Image
import Image from 'next/image'

// Icons
import { BiPlus, BiMinus } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'


const CartItem = ({ pizza }) => {
  return (
    <div className='select none'>
      <div className='flex gap-x-4 mb-2'>
        {/* Image */}
        <div className='flex justify-center items-center'>
          <Image src={pizza.image} width={90} height={90} alt='' />
        </div>
        {/* Pizza info */}
        <div className='flex-1 flex flex-col gap-y-1'>
          {/* Name */}
          <div className='text-lg capitalize font-bold'>
            {pizza.name}
          </div>
          <div className='flex flex-col gap-y-1'>
            {/* Crust */}
            <div className='capitalize font-medium text-[15px]'>
              {pizza.crust} crust
            </div>
            {/* Size */}
            <div className='capitalize mb-2 font-medium text-[15px]'>
              {pizza.size} size
            </div>
            {/* Quantity controls */}
            <div className='flex items-center gap-x-1'>
              {/* Decrease Quantity */}
              <div className='w-[18px] h-[18px flex justify-center items-center cursor-pointer] text-white gradient rounded-full'>
                <BiMinus />
              </div>
              {/* Pizza Amount */}
              <div className='font-semibold flex flex-1 max-w-[30px] justify-center items-center text-sm'>
                3
              </div>
              {/* Increase Quantity */}
              <div className='w-[18px] h-[18px flex justify-center items-center cursor-pointer] text-white gradient rounded-full'>
                <BiPlus />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between'>
          {/* Remove Item */}
          <div className='text-2xl flex justify-center items-center self-end cursor-pointer hover:scale-110 duration-100 transition-all text-orange'>
            <IoCloseOutline />
          </div>
          {/* Price */}
          <div>
            <span className='text-[17px] font-medium font-robotoCondensed'>
              ${parseFloat(pizza.price * pizza.amount).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      {/* Toppings */}
      <div className='flex flex-wrap items-center gap-3 p-6 border-b border-black/10'>
        <div className='font-semibold'>
          Toppings: {pizza.additionalTopping.lenght === 0 && 'None'}
        </div>
        {
          pizza.additionalTopping.map((topping, index) => {
            return (
              <div className='capitalize text-sm gradient font-medium px-3 py-1 rounded-full leading-none' key={index}>
                {topping.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CartItem