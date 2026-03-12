// import React from 'react'
import type { Doctor } from '../../../interface/DoctorInterface'
import CardComp from '../../Card/CardComp'

const DoctorList = ({ doctors }: { doctors: Doctor[] }) => {
  return (
    <>
        {doctors?.map((doctor) => (
        <CardComp key={doctor.id} data={doctor} />
      ))}
    </>
  )
}

export default DoctorList