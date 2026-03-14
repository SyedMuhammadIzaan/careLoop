// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../auth/Login'
import SignUp from '../../auth/SignUp'

const AuthRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default AuthRoute