import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

const MyAppointment:React.FC = () => {
    const location = useLocation();
    const { doctorName, specialization, day, slot } = location.state || {};
    return (
    <div>
        <div className='my-5'>
            <h2 className='text-2xl font-bold'>My Appointments</h2>
        </div>
        <hr className='my-2 underline-offset-8' />
        <div>
            <p><strong>Doctor:</strong> {doctorName}</p>
            <p><strong>Specialization:</strong> {specialization}</p>
            <p><strong>Day:</strong> {day}</p>
            <p><strong>Slot:</strong> {slot}</p>
        </div>
    </div>
  )
}

export default memo(MyAppointment)