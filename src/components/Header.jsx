import React from 'react'
import Logo from '../assets/images/logo.png'
import Gift from '../assets/images/colored-gift.gif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {

  useGSAP(() => {

    gsap.from('header', {
