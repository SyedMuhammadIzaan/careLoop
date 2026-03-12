import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container border-2 border-blue border-box'>
        <div className='footer-wrapper border-2 border-green-500 px-10'>
            <div className='about border-2 border-yellow-500 w-full h-full py-10'>
                <h2 className='text-2xl font-bold mb-4'>About Us</h2>
                <p className='text-base'>Providing trusted healthcare connections by helping patients find experienced doctors, book consultations, and receive quality medical care easily.</p>
            </div>
            <div className="links">
                <h2 className='text-2xl font-bold mb-4'>Quick Links</h2>
                <ul className='text-base'>
                    <li><a href="#" className='hover:underline'>Home</a></li>
                    <li><a href="#" className='hover:underline'>Doctors</a></li>
                    <li><a href="#" className='hover:underline'>About</a></li>
                </ul>
            </div>
            <div className='contact border-2 border-yellow-500 w-full h-full py-10'>
                <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
                <p className='text-base'>muhammadizaan201@gmail.com</p>
            </div>
            <div></div>
            

        </div>

    </div>
  )
}

export default Footer