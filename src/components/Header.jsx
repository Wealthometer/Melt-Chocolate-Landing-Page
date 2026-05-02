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
