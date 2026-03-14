// import React from 'react'
import { Link } from 'react-router-dom'
import type { Doctor } from '../../../interface/DoctorInterface'
import CardComp from '../Card'

const DoctorList = ({ doctors }: { doctors: Doctor[] }) => {
  return (
    <>
      {doctors?.map((doctor) => (
        <Link key={doctor.id} to={`/doctor/${doctor.id}`}>
          <CardComp data={doctor} />
        </Link>
      ))}
    </>
  )
}

export default DoctorList