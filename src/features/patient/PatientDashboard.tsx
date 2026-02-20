import React from 'react'
import TableComp from '../../components/TableComp'
import { patientRecordData } from '../../constants/patientRecord'

const PatientDashboard = () => {
  return (
    <div className='patient-container border-2 border-green-600 w-full h-full'>
      <div>
        <h3>Patient Record</h3>
      </div>
      <div className="patient-record-data">
        <TableComp tableData={patientRecordData} columns={} />
      </div>
    </div>
  )
}

export default PatientDashboard