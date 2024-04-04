import React, { useEffect } from 'react'
import './MenuBar.css';


const MenuBar = ({ array = [], invokerReff, axis = { x: 0, y: 0 }, isOpen, setIsOpen }) => {
    useEffect(() => {
        const handleToggling = (e) => {
            if (invokerReff.current === e.target) {
                setIsOpen(!isOpen)
            }
            else {
                setIsOpen(false)
            }
        }
        document.body.addEventListener("click", handleToggling);
    }, [isOpen])
    return (
        <>
            {isOpen && <div className='menu_container' style={{
                left: axis.x - 150,
                top: axis.y - 25
            }}>
                {array.map((item) => {
                    return <p onClick={item.onClick} className='menu_text'>{item.label}</p>
                })}
            </div>}

        </>
    )
}

export default MenuBar