import React, { useEffect, useRef, useState } from 'react';
import "./MenuBar.css"

const MenuBar = ({ array = [], axis = { x: 0, y: 0 }, setIsOpen, invokerRef, isOpen }) => {

    useEffect(() => {
        const handleToggle = (e) => {
            console.log(invokerRef.current, e.target, isOpen);
            if (invokerRef.current === e.target) {
                setIsOpen(!isOpen);
            }
            else {
                setIsOpen(false)
            }
        }

        document.body.addEventListener('click', handleToggle)

        return () => {
            document.body.removeEventListener('click', handleToggle)
        }
    }, [isOpen]);

    return (
        <>
            {
                isOpen && <div id="menuBar" className='menu_container' style={{
                    left: axis.x + 10,
                    top: axis.y,
                }}>
                    {array.map((item) => {
                        return <p onClick={item.onClick} className='menu_text'>{item.label}</p>
                    })}
                </div>
            }
        </>
    )
}

export default MenuBar