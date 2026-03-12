
const Footer = () => {
  return (
    <div className='footer-container border-box w-full'>
        <div className='footer-wrapper w-full px-7 py-10 flex flex-col sm:flex-row justify-evenly gap-10'>
            <div className='about sm:w-1/2 h-full py-10'>
                <h2 className='text-2xl font-bold mb-4'>About Us</h2>
                <p className='text-base'>Providing trusted healthcare connections by helping patients find experienced doctors, book consultations, and receive quality medical care easily.</p>
            </div>
            <div className="links w-1/2 sm:w-1/4 h-full py-10 flex flex-col">
                <h2 className='text-2xl font-bold mb-4'>Quick Links</h2>
                <ul className='text-base'>
                    <li><a href="#" className='hover:underline'>Home</a></li>
                    <li><a href="#" className='hover:underline'>Doctors</a></li>
                    <li><a href="#" className='hover:underline'>About</a></li>
                </ul>
            </div>
            <div className='contact w-1/2 sm:w-1/4 h-full py-10'>
                <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
                <p className='text-base'>123 Healthcare Street, Medical City</p>
                <p className='text-base'>muhammadizaan201@gmail.com</p>
            </div>
            <div></div>
            

        </div>

    </div>
  )
}

export default Footer