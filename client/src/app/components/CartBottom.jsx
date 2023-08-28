import React, { useContext, useState } from 'react'

// Icons
import { IoCloseOutline } from 'react-icons/io5'

// Components
import CheckoutDetails from './CheckoutDetails'

// Modal
import Modal from 'react-modal'

// Context
import { CartContext } from '../context/CartContext'

// Modal Styles
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
}

// Bind Modal To Body
Modal.setAppElement('body')

const CartBottom = () => {

  const { setIsOpen, cart } = useContext(CartContext)

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
    <>
      {cart.length >= 1 ? (
        <div className='px-6 py-3 lg:px-6 mt-auto'>
          {/* Total Price */}
          <div className='flex items-center justify-between mb-6'>
            <div>Total: </div>
            <div>$320</div>
          </div>
          {/* BTN */}
          <div className='flex flex-col gap-y-3'>
            <button onClick={() => { setIsOpen(false), openModal(true) }} className='btn btn-lg gradient font-semibold flex justify-center'>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className='absolute top-0 w-full h-full flex justify-center items-center -z-10'>
          <div className='font-semibold'>Your Cart Is Empty</div>
        </div>
      )}
      {/* Checkout Modal */}
      {
        modal && (
          <Modal
            className='bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-500%] lg:translate-y-[-50%] outline-none'
            isOpen={modal}
            style={modalStyles}
            onRequestClose={closeModal}
            contentLabel='Checkout Modal'
          >
            {/* Close Modal Icon */}
            <div onClick={closeModal} className='absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer'>
              <IoCloseOutline className='text-4xl' />
            </div>
            <CheckoutDetails />
          </Modal>
        )}
    </>
  )
}

export default CartBottom