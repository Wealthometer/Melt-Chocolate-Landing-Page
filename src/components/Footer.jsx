import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={footerRef} className='inner-container bg-orange text-white mt-20'>
      <div className='pt-24 grid grid-cols-12'>
        <div className='text-5xl font-semibold col-span-8'>Crafted to melt,<br/> not rush.</div>
        <div className='col-span-2'>
          <h3 className='text-xl font-bold mb-4'>Explore</h3>
          <ul className='flex flex-col gap-3'>
            <li><a href="" className='hover:underline'>Flavors</a></li>
            <li><a href="" className='hover:underline'>Our Story</a></li>
            <li><a href="" className='hover:underline'>How it's Made</a></li>
            <li><a href="" className='hover:underline'>Gifting</a></li>
          </ul>
        </div>
        <div className='col-span-2'>
          <h3 className='text-xl font-bold mb-4'>Experience</h3>
          <ul className='flex flex-col gap-3'>
            <li><a href="" className='hover:underline'>Taste Journey</a></li>
            <li><a href="" className='hover:underline'>Texture & Melt</a></li>
            <li><a href="" className='hover:underline'>Ingredients</a></li>
            <li><a href="" className='hover:underline'>Process</a></li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between items-end mt-40'>
        <div className='flex gap-3'>
          <a href='' className='bg-white w-9 h-9 rounded-full flex justify-center items-center'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#571F01"/>
            </svg>
          </a>
