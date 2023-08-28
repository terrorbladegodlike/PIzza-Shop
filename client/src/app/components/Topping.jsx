import React, { useState, useEffect } from 'react'

// Next Image
import Image from 'next/image'

// Icons
import { IoMdCheckmark } from 'react-icons/io'


const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {

  // Checkbox state
  const [isChecked, setIsChecked] = useState(false)

  // Handle checkbox
  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  // Handle topping
  const handleTopping = () => {
    if (isChecked) {
      // Use Set To Ensure Uniaue Values
      const newToppings = new Set([...additionalTopping, { ...topping }])
      setAdditionalTopping(Array.from(newToppings))
    } else {
      // Remove The Topping With The Matching Name
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name
      })
      setAdditionalTopping(newToppings)
    }
  }

  useEffect(() => {
    handleTopping()
  }, [isChecked])

  return (
    <div className={`${isChecked && 'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}>
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt='image'
        className='mb-2'
      />
      {/* Topping Name */}
      <div className='text-sm capitalize text-center font-medium'>
        {topping.name}
      </div>
      {/* Checkbox */}
      <input
        className='absolute w-full h-full opacity-0 cursor-pointer'
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
      {/* Checked icon */}
      <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
        <IoMdCheckmark className='text-xl text-orange' />
      </div>
    </div>
  )
}

export default Topping