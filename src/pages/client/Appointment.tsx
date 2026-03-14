import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doctorHandler, handleAppointment } from '../../handlers/doctorHandler'
import { notification } from "antd";
import type { Doctor } from '../../interface/DoctorInterface';
// import { Image } from 'antd'


const Appointment = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState<Doctor | null | undefined>(null)
    // const [slots, setSlots] = useState<string[]>([]);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    useEffect(() => {
        if (id) {
            setDoctor(doctorHandler(id))
        }
    }, [id])
    console.log(doctor)
    return (
        <div className='profile-content py-10 grid grid-cols-1 gap-4 md:grid-cols-2 w-full h-full'>
            <div className="profile-image-wrapper w-full h-full flex justify-center">
                <div className='w-56 h-56'>
                    {/* <Image src={doctor?.image} alt={doctor?.name} className='w-full h-full object-cover rounded-full' /> */}
                    <img
                        draggable={false}
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                </div>
            </div>

            <div className="info-wrapper">
                {/* profile info here */}
                {
                    doctor ? (
                        <div key={doctor.id} className='py-0 px-4'>
                            <h2 className='text-3xl font-bold mb-2'>{doctor.name}</h2>
                            <p className='text-gray-600 mb-1'>{doctor.about}</p>
                            <p className='text-gray-600 mb-1'><strong>Specialization:</strong> {doctor.specialization}</p>
                            <p className='text-gray-600 mb-1'><strong>Qualification:</strong> {doctor.qualification.join(', ')}</p>
                            <p className='text-gray-600 mb-1'><strong>Experience:</strong> {doctor.experience} years</p>
                            <p className='text-gray-600 mb-1'><strong>Hospital:</strong> {doctor.hospital}</p>
                            <p className='text-gray-600 mb-1'><strong>Location:</strong> {doctor.location}</p>
                            <p className='text-gray-600 mb-1'><strong>Consultation Fee:</strong> ${doctor.consultationFee}</p>
                            <p className='text-gray-600 mb-1'><strong>Rating:</strong> {doctor.rating} ({doctor.totalReviews} reviews)</p>
                            <p className='text-gray-600 mb-1'>
                                <strong>Availability:</strong>

                                {doctor.availableDays.map((day) => (

                                    <button
                                        key={day}
                                        onClick={() => setSelectedDay(day)}
                                        className={`inline-block px-2 py-1 rounded-full mr-2 mb-2 
${selectedDay === day
                                                ? "bg-blue-600 text-white"
                                                : "bg-blue-200 text-blue-800"
                                            }`}
                                    >
                                        {day}

                                    </button>

                                ))}
                            </p>
                            <p className='text-gray-600 mb-1'>
                                <strong>Availability Time:</strong>

                                {doctor.availableSlots.map((slot) => (

                                    <button
                                        key={slot}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`inline-block px-2 py-1 rounded-full mr-2 mb-2 
${selectedSlot === slot
                                                ? "bg-green-600 text-white"
                                                : "bg-green-200 text-green-800"
                                            }`}
                                    >
                                        {slot}

                                    </button>

                                ))}
                            </p>
                        </div>)
                        : (
                            <p>No profile data available.</p>
                        )
                }
                <div className='book-appointment-btn'>
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                        onClick={()=>{handleAppointment({selectedDay, selectedSlot})}}
                    >
                        Book Appointment
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Appointment