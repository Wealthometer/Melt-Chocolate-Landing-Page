import React from 'react'

const FlavorCards = ({ setActiveFlavor }) => {
  return (
    <>
      <div className='grid grid-cols-4 gap-5 items-end pb-30 h-screen'>
        <div className='relative group card caramel-card bg-orange w-full h-[40vh] rounded-xl origin-top     transform transition-transform duration-500 ease-out hover:scale-y-[1.08] flex flex-col items-center justify-end overflow-hidden pb-8'
        onMouseEnter={() => setActiveFlavor('caramel')}
        onMouseLeave={() => setActiveFlavor(null)}>
