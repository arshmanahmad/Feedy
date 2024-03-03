import React from 'react'
import './style.css'
import SideBar from '../../components/SideBar/SideBar'
import DashBoard from './pages/DashBoard/DashBoard'
import { Routes, Route } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <div className="admin_wrapper">
                <div className="admin_sideBar">
                    <SideBar />
                </div>
                <div className='admin_routes'>
                    <Routes>
                        <Route path="/DashBoard" element={<DashBoard />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Admin