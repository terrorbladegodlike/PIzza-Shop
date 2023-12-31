import React, { useState, useEffect, useContext } from 'react'

// Next Image
import Image from 'next/image'

// Import Components
import SizeSelection from './SizeSelection'
import CrustSelection from './CrustSelection'
import Topping from './Topping'

// Import Context
import { CartContext } from '../context/CartContext'

const PizzaDetails = ({ pizza, setModal }) => {

  // Pizza Size State
  const [size, setSize] = useState('small')

  // Pizza Crust State
  const [crust, setCrust] = useState('traditional')

  // Additional Topping State
  const [additionalTopping, setAdditionalTopping] = useState([])

  // Additional Topping Price
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0)

  // Price State
  const [price, setPrice] = useState(0)

  // Add To Cart
  const { addToCart } = useContext(CartContext)

  // Set The Price Based On The Pizza Size
  useEffect(() => {
    size === 'small' ? setPrice(parseFloat(pizza.priceSm + additionalToppingPrice).toFixed(2)) :
      size === 'medium' ? setPrice(parseFloat(pizza.priceMd + additionalToppingPrice).toFixed(2)) :
        size === 'large' ? setPrice(parseFloat(pizza.priceLg + additionalToppingPrice).toFixed(2)) : null
  })

  // Set Additional Topping Price
  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price
      }, 0)
      setAdditionalToppingPrice(toppingPrice)
    } else {
      setAdditionalToppingPrice(0)
    }
  }, [additionalTopping]);

  return (
    <div className='flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8'>
      {/* Top */}
      <div className='lg:flex-1 flex justify-center items-center'>
        {/* Pizza Image */}
        <div className='max-w-[300px] lg:max-w-none mt-6 lg:mt-0'>
          <Image
            className='mx-auto relative'
            width={450}
            height={450}
            src={pizza.image}
            alt='pizza'
          />
        </div>
      </div>
      {/* Details */}
      <div className='flex flex-1 flex-col'>
        <div className='flex-1 p-2 text-center lg:text-left'>
          <div className='flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-white pr-2'>
            {/* Name */}
            <div className='font-semibold'>
              <h2 className='capitalize text-3xl mb-1'>
                {pizza.name}
              </h2>
              {/* Size & Crust text */}
              <div className='mb-6 text-lg font-medium'>
                <span>
                  {size === 'small' ? '25 cm' : size === 'medium' ? '30 cm' : size === 'large' ? '35 cm' : null}
                </span>
                <span>
                  , {crust} crust
                </span>
              </div>
            </div>
            {/* Size Sellection */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            {/* Crust Sellection */}
            <CrustSelection crust={crust} setCrust={setCrust} />
            {/* Topping */}
            <div className='mb-4 text-xl font-semibold'>
              Choose Topping
            </div>
            {/* Topping List */}
            <div className='flex flex-1 flex-wrap gap-2 py-1 justify-center lg:justify-start'>
              {pizza.toppings?.map((topping, index) => {
                return <Topping topping={topping} additionalTopping={additionalTopping} setAdditionalTopping={setAdditionalTopping} key={index} />
              })}
            </div>
          </div>
        </div>
        {/* Add To Card Btn */}
        <div className='h-full flex items-center px-2 lg:items-end'>
          <button onClick={() => { addToCart(pizza.id, pizza.image, pizza.name, price, additionalTopping, size, crust), setModal(false) }} className='btn btn-lg gradient w-full flex justify-center gap-x-2'>
            <div>
              Add to card for
            </div>
            <div>
              $ {price}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PizzaDetails