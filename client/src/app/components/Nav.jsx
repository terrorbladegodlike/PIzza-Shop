'use client'
import React, { useContext } from 'react'

// Import Image
import Image from 'next/image'

// Import Link
import Link from 'next/link'

// Context
import { CartContext } from '../context/CartContext'

const Nav = () => {

  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)

  return (
    <nav className='absolute w-full py-8'>
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        {/* Logo */}
        <Link
          href='#'
          className='max-w-[160px] lg:max-w-max'
        >
          <Image
            src={'logo.svg'}
            width={180}
            height={180}
            alt=''
          />
        </Link>
        {/* Phone & Cart */}
        <div className='flex gap-x-8 items-center'>
          {/* Phone */}
          <div className='flex gap-x-3 items-center'>
            <Image
              src={'phone.svg'}
              width={42}
              height={42}
              alt=''
            />
            <div className='text-white'>
              <div className='font-robotoCondensed uppercase font-medium leading-none text-sm'>
                24/7 Pizza Delivery Service
              </div>
              <div className='text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide'>
                6548 223 8754
              </div>
            </div>
          </div>
          {/* Cart */}
          <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer hidden lg:flex'>
            <Image
              src={'bag.svg'}
              width={38}
              height={38}
              alt=''
            />
            {/* Amount */}
            <div className='bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] font-robotoCondensed absolute -bottom-2 -right-1'>
              {itemAmount}
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Nav