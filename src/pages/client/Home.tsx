import React from 'react'
import Navbar from '../../components/client/Navbar'
import Herobanner from '../../components/client/Herobanner'

const Home = () => {
  return (
    <div>
      <div className='navbar-container border-2 border-slate-600 w-full'>
        <Navbar />
      </div>
      <div className='herobanner-container w-full h-full max-w-[1200px] mx-auto box-border'>
        <Herobanner />
      </div>
      <div className="doctor-container">
      </div>
    </div>
  )
}

export default Home