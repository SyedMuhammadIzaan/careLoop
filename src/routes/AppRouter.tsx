// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from './AdminRoute/AdminRoute';
import Home from '../pages/client/Home';
import About from '../pages/client/About';
import AuthRoute from "./AuthRoute/AuthRoute";
import ClientLayout from "../layout/ClientLayout";
import BookAppointment from "../pages/client/BookAppointment";
import MyAppointment from "../pages/client/MyAppointment";
const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <AdminRoute />
                <Routes>
                    <Route element={<ClientLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/doctor/:id" element={<BookAppointment />} />
                        <Route
                            path="/my-appointments"
                            element={
                                <MyAppointment
                                    doctorName=""
                                    specialization=""
                                    day=""
                                    slot=""
                                />
                            }
                        />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
                <AuthRoute />
            </BrowserRouter>
        </div>
    )
}

export default AppRouter