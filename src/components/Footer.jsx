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
          <a href='' className='bg-white w-9 h-9 rounded-full flex justify-center items-center'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0286 2C14.1536 2.003 14.7246 2.009 15.2176 2.023L15.4116 2.03C15.6356 2.038 15.8566 2.048 16.1236 2.06C17.1876 2.11 17.9136 2.278 18.5506 2.525C19.2106 2.779 19.7666 3.123 20.3226 3.678C20.8313 4.17773 21.2248 4.78247 21.4756 5.45C21.7226 6.087 21.8906 6.813 21.9406 7.878C21.9526 8.144 21.9626 8.365 21.9706 8.59L21.9766 8.784C21.9916 9.276 21.9976 9.847 21.9996 10.972L22.0006 11.718V13.028C22.003 13.7574 21.9953 14.4868 21.9776 15.216L21.9716 15.41C21.9636 15.635 21.9536 15.856 21.9416 16.122C21.8916 17.187 21.7216 17.912 21.4756 18.55C21.2248 19.2175 20.8313 19.8223 20.3226 20.322C19.8228 20.8307 19.2181 21.2242 18.5506 21.475C17.9136 21.722 17.1876 21.89 16.1236 21.94L15.4116 21.97L15.2176 21.976C14.7246 21.99 14.1536 21.997 13.0286 21.999L12.2826 22H10.9736C10.2438 22.0026 9.51409 21.9949 8.78457 21.977L8.59057 21.971C8.35318 21.962 8.11584 21.9517 7.87857 21.94C6.81457 21.89 6.08857 21.722 5.45057 21.475C4.7834 21.2241 4.17901 20.8306 3.67957 20.322C3.17051 19.8224 2.77668 19.2176 2.52557 18.55C2.27857 17.913 2.11057 17.187 2.06057 16.122L2.03057 15.41L2.02557 15.216C2.00713 14.4868 1.9988 13.7574 2.00057 13.028V10.972C1.9978 10.2426 2.00514 9.5132 2.02257 8.784L2.02957 8.59C2.03757 8.365 2.04757 8.144 2.05957 7.878C2.10957 6.813 2.27757 6.088 2.52457 5.45C2.77626 4.7822 3.17079 4.17744 3.68057 3.678C4.17972 3.16955 4.78376 2.77607 5.45057 2.525C6.08857 2.278 6.81357 2.11 7.87857 2.06C8.14457 2.048 8.36657 2.038 8.59057 2.03L8.78457 2.024C9.51376 2.00623 10.2432 1.99857 10.9726 2.001L13.0286 2ZM12.0006 7C10.6745 7 9.40272 7.52678 8.46503 8.46447C7.52735 9.40215 7.00057 10.6739 7.00057 12C7.00057 13.3261 7.52735 14.5979 8.46503 15.5355C9.40272 16.4732 10.6745 17 12.0006 17C13.3267 17 14.5984 16.4732 15.5361 15.5355C16.4738 14.5979 17.0006 13.3261 17.0006 12C17.0006 10.6739 16.4738 9.40215 15.5361 8.46447C14.5984 7.52678 13.3267 7 12.0006 7ZM12.0006 9C12.3945 8.99993 12.7847 9.07747 13.1487 9.22817C13.5127 9.37887 13.8434 9.5998 14.122 9.87833C14.4007 10.1569 14.6217 10.4875 14.7725 10.8515C14.9233 11.2154 15.001 11.6055 15.0011 11.9995C15.0011 12.3935 14.9236 12.7836 14.7729 13.1476C14.6222 13.5116 14.4013 13.8423 14.1227 14.121C13.8442 14.3996 13.5135 14.6206 13.1496 14.7714C12.7856 14.9223 12.3955 14.9999 12.0016 15C11.2059 15 10.4429 14.6839 9.88025 14.1213C9.31764 13.5587 9.00157 12.7956 9.00157 12C9.00157 11.2044 9.31764 10.4413 9.88025 9.87868C10.4429 9.31607 11.2059 9 12.0016 9M17.2516 5.5C16.92 5.5 16.6021 5.6317 16.3677 5.86612C16.1333 6.10054 16.0016 6.41848 16.0016 6.75C16.0016 7.08152 16.1333 7.39946 16.3677 7.63388C16.6021 7.8683 16.92 8 17.2516 8C17.5831 8 17.901 7.8683 18.1355 7.63388C18.3699 7.39946 18.5016 7.08152 18.5016 6.75C18.5016 6.41848 18.3699 6.10054 18.1355 5.86612C17.901 5.6317 17.5831 5.5 17.2516 5.5Z" fill="#571F01"/>
            </svg>
          </a>
          <a href='' className='bg-white w-9 h-9 rounded-full flex justify-center items-center'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.94141 5.00002C6.94114 5.53046 6.73017 6.03906 6.35491 6.41394C5.97965 6.78883 5.47084 6.99929 4.94041 6.99902C4.40997 6.99876 3.90137 6.78779 3.52649 6.41253C3.1516 6.03727 2.94114 5.52846 2.94141 4.99802C2.94167 4.46759 3.15264 3.95899 3.5279 3.5841C3.90316 3.20922 4.41197 2.99876 4.94241 2.99902C5.47284 2.99929 5.98144 3.21026 6.35633 3.58552C6.73121 3.96078 6.94167 4.46959 6.94141 5.00002ZM7.00141 8.48002H3.00141V21H7.00141V8.48002ZM13.3214 8.48002H9.34141V21H13.2814V14.43C13.2814 10.77 18.0514 10.43 18.0514 14.43V21H22.0014V13.07C22.0014 6.90002 14.9414 7.13002 13.2814 10.16L13.3214 8.48002Z" fill="#571F01"/>
            </svg>
          </a>
        </div>
        <a href='' className='flex items-center gap-2 underline'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.15467 25.3334C5.54044 25.3334 5.028 25.1281 4.61733 24.7174C4.20667 24.3067 4.00089 23.7939 4 23.1787V8.82141C4 8.20719 4.20578 7.69475 4.61733 7.28408C5.02889 6.87341 5.54089 6.66764 6.15333 6.66675H25.8467C26.46 6.66675 26.972 6.87253 27.3827 7.28408C27.7933 7.69564 27.9991 8.20808 28 8.82141V23.1801C28 23.7934 27.7942 24.3059 27.3827 24.7174C26.9711 25.129 26.4591 25.3343 25.8467 25.3334H6.15467ZM16 16.1547L26.6667 9.18008L26.256 8.00008L16 14.6667L5.744 8.00008L5.33333 9.18008L16 16.1547Z" fill="white"/>
          </svg>
          <span className='font-bold text-xl'>Subscribe Newsletter</span>
        </a>
      </div>
      <div className='text-sm flex justify-between items-center py-6 border-t border-[#ffffff50] mt-12'>
        <div>Design by <span className='underline'>Rupz Web</span></div>
        <div className='flex gap-5'>
          <a href="" className='hover:underline'>Privacy Policy</a>
          <a href="" className='hover:underline'>Terms & Conditions</a>
        </div>
      </div>
    </section>
  )
}

export default Footer