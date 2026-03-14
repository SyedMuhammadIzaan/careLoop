// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DoctorDashboard from '../../pages/admin/doctor/DoctorDashboard'
import PatientDashboard from '../../pages/admin/patient/PatientDashboard'
import MyProfile from '../../pages/admin/profile/myProfile'

const AdminRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/admin" element={<DoctorDashboard />} />
                <Route path="/admin/patients" element={<PatientDashboard />} />
                <Route path="/admin/doctors" element={<MyProfile />} />
                {/* <Route path="/admin/appointments" element={<Ap />} /> */}
            </Routes>
        </>
    )
}

export default AdminRoute