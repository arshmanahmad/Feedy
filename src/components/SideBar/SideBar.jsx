import React, { useState } from 'react'
import './SideBar.css'
import logo from './assets/logo/orignal-logo.png'
import Button from '../Button/Button'
import Logout from '../SideBar/assets/logo/logout-disable.jpg'
import { useContext } from 'react'
import Context from '../Context/Context'

const SideBar = () => {
    const [activeButton, setActiveButton] = useState(0)
    const { sidebarButtons } = useContext(Context);
    const handleActiveButton = (index) => {
        setActiveButton(index)
    }
    return (
        <>
            <div className="side-bar">
                <div className='side-bar-container'>
                    <img className='sidebar-main-logo' src={logo} alt="" />
                    <div className="sidebar-btn-container">
                        {sidebarButtons.map((buttons, index) => {
                            let active = ""
                            if (activeButton === 0) {
                                active = "active-btn"
                            }
                            if (index === activeButton) {
                                active = "active-btn"
                            }
                            else {
                                active = "btns"
                            }

                            return (
                                <button onClick={() => handleActiveButton(index)} className={active}> <img src={buttons.img} alt="" />{buttons.buttonText}</button>
                            )
                        })}
                    </div>
                    <Button className='sidebar-btn' type="outlined" icon={Logout} text="Logout" />
                </div>
            </div >
        </>
    )
}

export default SideBar