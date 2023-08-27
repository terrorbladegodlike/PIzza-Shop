import React from 'react'

// Import Next Image
import Image from 'next/image'

const SizeSelection = ({ pizza, size, setSize }) => {
  return (
    <div className='mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start'>
      {/* Sizes */}
      <div className='flex gap-x-12 items-baseline mb-10 font-medium'>
        {/* Small Size */}
        <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
          <Image
            src={pizza.image}
            width={60}
            height={60}
            alt='pizza'
            className={`${size === 'small' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]'} mb-1`}
          />
          <input
            type="radio"
            name='size'
            value='small'
            checked={size === 'small'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Small
        </label>
        {/* Medium Size */}
        <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
          <Image
            src={pizza.image}
            width={70}
            height={70}
            alt='pizza'
            className={`${size === 'medium' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]'} mb-1`}
          />
          <input
            type="radio"
            name='size'
            value='medium'
            checked={size === 'medium'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Medium
        </label>
        {/* Large Size */}
        <label className='flex flex-col items-center gap-x-2 cursor-pointer'>
          <Image
            src={pizza.image}
            width={80}
            height={80}
            alt='pizza'
            className={`${size === 'large' ? 'border-2 border-orange p-[2px] rounded-full' : 'border-transparent filter saturate-[.1]'} mb-1`}
          />
          <input
            type="radio"
            name='size'
            value='large'
            checked={size === 'large'}
            onChange={(e) => setSize(e.target.value)}
            className='appearance-none'
          />
          Small
        </label>
      </div>
    </div>
  )
}

export default SizeSelection