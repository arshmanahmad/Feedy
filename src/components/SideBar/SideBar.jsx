import React, { useState } from 'react'
import './SideBar.css'
import logo from './assets/logo/orignal-logo.png'
import Button from '../Button/Button'
import Logout from '../SideBar/assets/logo/logout-disable.jpg'
import { useContext } from 'react'
import Context from '../Context/Context'
import cuttedLogo from './assets/logo/cutted-logo.png'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ className = "" }) => {
    let route = "";
    const navigate = useNavigate("")
    const [activeButton, setActiveButton] = useState(0)
    const { sidebarButtons } = useContext(Context);
    const handleActiveButton = (index, button) => {
        route = button.buttonText
        setActiveButton(index)
        navigate(`/admin/${route}`)
    }
    console.log(activeButton);
    return (
        <>
            <div className="sidebar-outerBox">
                <div className="sidebar-pic-box">
                    <picture className='sidebar-main-logo'>
                        <source media="(max-width: 1215px)" srcset={cuttedLogo} />
                        <img src={logo} alt="logo" />
                    </picture>
                </div>
                <div className={`${className} side_bar ${className === "display" ? "side_bar--display" : " "}`}>
                    <div className='side-bar-container'>
                        <div className="sidebar-btn-container">
                            {sidebarButtons.map((buttons, index) => {
                                let btn = "btns"
                                return (
                                    < button onClick={() => handleActiveButton(index, buttons)} className={btn}> <img src={buttons.img} alt="" />{buttons.buttonText}</button>
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