import React from 'react'

// Next Image
import Image from 'next/image'

// Next Link
import Link from 'next/link'

// Icons
import { FaYoutube, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-primary bg-pattern py-16'>
      <div className="conatiner mx-auto">
        <div className='flex flex-col items-center gap-y-6'>
          {/* Logo */}
          <Link href={'#'}>
            <Image
              src={'logo.svg'}
              width={180}
              height={180}
              alt=''
            />
          </Link>
          {/* Social Icons */}
          <div className='flex gap-x-6 text-xl text-white'>
            <Link href={'#'}>
              <FaYoutube />
            </Link>
            <Link href={'#'}>
              <FaFacebook />
            </Link>
            <Link href={'#'}>
              <FaInstagram />
            </Link>
            <Link href={'#'}>
              <FaPinterest />
            </Link>
          </div>
          {/* Copyright */}
          <div className='text-white font-medium'>
            Copyright &copy: Pizzaland 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer