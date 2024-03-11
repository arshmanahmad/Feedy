import React from 'react'
import './style.css'
import SideBar from '../../components/SideBar/SideBar'
import DashBoard from './pages/DashBoard/DashBoard'
import { Routes, Route } from 'react-router-dom'
import Store from './pages/Store/index'
import Table from './pages/Store/components/Table/Table'

const data = [
    {
        id: 1,
        name: "Store 1",
        contactNo: "+052 71788822",
        adminEmail: "store1.admin@str.com",
        adress: "3D Program , Asholoo, Oboimxs 1192 22190, SW"
    },
    {
        id: 2,
        name: "Store 2",
        contactNo: "+052 72788822",
        adminEmail: "store2.admin@str.com",
        adress: "3D Program , Asholoo, Oboimxs 1192 22190, SW"
    }
];


const dropDown = (value) => {
    return <select value={value}>
        <option value={1}>Active</option>
        <option value={2}>Inactive</option>
    </select>
}

const Admin = () => {
    return (
        <>
            <div className="admin_wrapper">
                <div className="admin_sideBar">
                    <SideBar />
                </div>
                <Table
                    array={data}
                    label={[
                        "ID", "Name", "Admin Email", "Address"]}
                    filters={"adminEmail"}
                    keysToDisplay={[
                        "id", "name", "adminEmail", "adress"
                    ]}
                    customBlocks={[
                        {
                            index: 0,
                            component: dropDown
                        }
                    ]}
                />
                {/* <div className='admin_routes'>
                    <Routes>
                        <Route path="/home/*" element={<DashBoard />} />
                        <Route path="/stores/*" element={<Store />} />
                    </Routes>
                </div> */}
            </div>
        </>
    )
}

export default Admin