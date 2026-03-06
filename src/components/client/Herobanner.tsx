// import React from 'react'
import HerobannerImg from '../../assets/header_img-DhAi3lLA.png'
const Herobanner = () => {
  return (
    <div className='border-2 border-orange-500 bg-blue-400 w-full h-full flex justify-around'>
      <div className='w-1/2'>
        <h1 className='text-6xl font-bold text-white'>Book Appointment with Real Doctors</h1>
      </div>
      <div className='w-1/2 border-2 border-yellow-500 flex justify-center items-center'>
        <img className='w-full' src={HerobannerImg} alt="" />
      </div>
    </div>
  )
}

export default Herobanner