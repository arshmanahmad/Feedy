import React from 'react'
import './SideBar.css'
import logo from './assets/logo/orignal-logo.png'
import home from './assets/logo/Home.png'
import Button from '../Button/Button'
import Logout from './assets/logo/logout-disable.jpg'
import store from './assets/logo/Stores.png'
import order from './assets/logo/Orders.png'
import product from './assets/logo/Products.png'
import users from './assets/logo/icons8_user_account 1.png'
import Categories from './assets/logo/icons8_sorting 1.png'
import setting from './assets/logo/Frame 997.png'

const SideBar = () => {
    return (
        <>
            <div className="side-bar">
                <div className='side-bar-container'>
                    <img className='sidebar-main-logo' src={logo} alt="" />
                    <div className="sidebar-btn-container">
                        <button><img src={home} alt="" />Home</button>
                        <button><img src={home} alt="" />Stores</button>
                        <button><img src={order} alt="" />Order</button>
                        <button><img src={Categories} alt="" />Categories</button>
                        <button><img src={product} alt="" />Products</button>
                        <button><img src={users} alt="" />Users</button>
                        <button><img src={setting} alt="" />Settings</button>

                    </div>
                    <Button className='sidebar-btn' type="outlined" icon={Logout} text="Logout" />
                </div>
            </div>
        </>
    )
}

export default SideBar