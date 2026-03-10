// import React from 'react'
import HerobannerImg from '../../assets/header_img-DhAi3lLA.png'
import AvatarComp from './Avatar'
const Herobanner = () => {
  return (
    <div className="border-2 border-orange-500 bg-blue-400 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left px-6 py-10 gap-8">

      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-6">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug">
          Book Appointment with Real Doctors
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md text-white">
          <AvatarComp />
          <p className='text-base sm:text-xs'>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          className="w-full max-w-md"
          src={HerobannerImg}
          alt="Doctor Appointment"
        />
      </div>

    </div>
  )
}

export default Herobanner