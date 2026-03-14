import React from 'react'
import Navbar from '../components/client/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
const ClientLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='w-full'>
                <Navbar />
            </div>
            <div className='flex-grow w-full max-w-[1200px] mx-auto px-4'>
                <Outlet />
            </div>
            <div className="w-full">
                <Footer />
            </div>

        </div>
    )
}

export default ClientLayout