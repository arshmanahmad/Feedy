import React, { useEffect, useState } from 'react'
import './SideBar.css'
import logo from './assets/logo/orignal-logo.png'
import Button from '../Button/Button'
import Logout from '../SideBar/assets/logo/logout-disable.jpg'
import { useContext } from 'react'
import Context from '../Context/AppData'
import cuttedLogo from './assets/logo/cutted-logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { adminSideBar } from '../../static/data'
import { hover } from '@testing-library/user-event/dist/hover'

const SideBar = ({ className = "" }) => {
    let btn;
    const navigate = useNavigate("")
    const location = useLocation().pathname.split("/")[2];

    const handleActiveButton = (route) => {
        navigate(`/admin/${route}`);
    }
    const capitalization = (text) => {
        return text[0].toUpperCase() + text.slice(1)
    }
    useEffect(() => {
        document.getElementById("main_sideBarLogo").style.transform = "rotate(360deg)";
    }, [])
    return (
        <>
            <div className="sidebar-outerBox">
                <div className="sidebar-pic-box">
                    <picture id="main_sideBarLogo" className='sidebar-main-logo'>
                        <source media="(max-width: 1215px)" srcset={cuttedLogo} />
                        <img src={logo} alt="logo" />
                    </picture>
                </div>
                <div className={`${className} side_bar ${className === "display" ? "side_bar--display" : " "}`}>
                    <div className='side-bar-container'>
                        <div className="sidebar-btn-container">
                            {adminSideBar.map((buttons, index) => {
                                btn = "btns"
                                if (buttons.buttonText.toLowerCase() === location.toLowerCase()) {
                                    btn = "active-btn"
                                }
                                return (
                                    <button onClick={() => handleActiveButton(buttons.buttonText)} className={btn}> <img src={buttons.img} alt="" />{capitalization(buttons.buttonText)}</button>
                                )
                            })}
                        </div>
                        <Button className='sidebar-btn' type="outlined" icon={Logout} text="Logout" />
                    </div>
                </div >
            </div >
        </>
    )
}

export default SideBar