import React from 'react'
import Logo from '../assets/images/logo.png'
import Gift from '../assets/images/colored-gift.gif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {

  useGSAP(() => {

    gsap.from('header', {
      y: '-25%',
      opacity: 0
    })

  })

  return (
    <>
      <header className='sticky top-0 z-20 flex items-stretch justify-between gap-5 max-w-7xl m-auto p-6'>
        <div className="flex items-center justify-between bg-white rounded-xl w-full px-4 py-3">
          <img src={Logo} alt="Melt Chocolate" className='max-w-36' />
          <nav>
            <ul className='flex items-center gap-9 font-medium tracking-tight'>
              <li>
                <a href="">Flavors</a>
              </li>
              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">How it's Made</a>
              </li>
              <li>
                <a href="" className='flex items-center justify-between gap-2'>Gifting <img src={Gift} alt="Gift" className='max-w-11 pb-2' /></a>
              </li>
            </ul>
          </nav>
        <a href="" className='flex items-center justify-center bg-white rounded-xl text-nowrap px-4 py-3 font-medium gap-3'>Explore Flavors 
