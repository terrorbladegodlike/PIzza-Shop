'use client'
import React, { useState } from 'react'

// Import Image
import Image from 'next/image'

// Import Modal
import Modal from 'react-modal'

// Import Components
import PizzaDetails from './PizzaDetails'

// Import Icons
import { IoMdClose } from 'react-icons/io'

// Bind Modal To Body
Modal.setAppElement('body')

// Modal Styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
}

const Pizza = ({ pizza }) => {

  // Modal State
  const [modal, setModal] = useState(false)

  // Open Modal
  const openModal = () => {
    setModal(true)
  }

  // Close Modal
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className='group py-2 px-4 xl:py-4 xl:px-2 rounded-xl'>
      <Image
        onClick={openModal}
        className='lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer'
        width={270}
        height={270}
        src={pizza.image}
        alt='pizza'
        priority={1}
      />
      {/* Title */}
      <div onClick={openModal}>
        <div className='text-xl font-bold mb-3 capitalize cursor-pointer'>
          {pizza.name}
        </div>
      </div>
      {/* Description */}
      <div className='text-sm font-medium min-h-[60px] mb-6'>
        {pizza.description}
      </div>
      {/* Price & Btn */}
      <div className='mb-6 flex items-center justify-between'>
        {/* Price -> hidden(sm) - visible(lg) */}
        <div className='hidden lg:flex text-xl font-semibold'>
          starts at {pizza.priceSm}
        </div>
        {/* Btn -> hidden(sm) - visible(lg) */}
        <button onClick={openModal} className='hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm'>
          Choose
        </button>
        {/* Btn -> visible(sm) - hidden(lg) */}
        <button onClick={openModal} className='btn btn-sm gradient lg:hidden text-sm px-3'>
          Starts at {pizza.priceSm}
        </button>
      </div>
      {/* Modal */}
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel='Pizza Modal'
          className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          {/* Close Modal Icon */}
          <div onClick={closeModal} className='absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer'>
            <IoMdClose className='text-4xl text-orange' />
          </div>
          {/* Pizza Details */}
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  )
}

export default Pizza