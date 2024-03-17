import React, { useEffect, useRef, useState } from 'react';
import "./MenuBar.css"

const MenuBar = ({ array = [], axis = { x: 0, y: 0 }, setIsOpen, invokerRef, isOpen }) => {

    console.log(isOpen);

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            console.log(invokerRef.current, e.target);
            if (isOpen === false && invokerRef.current === e.target) {
                console.log("open");
                setIsOpen(true);
                return;
            }
            // else if (invokerRef.current === e.target && isOpen) {
            //     console.log("close again");
            //     setIsOpen(false)
            // }
            else {
                console.log("close");
                setIsOpen(false)
            }
        })

        // return document.body.removeEventListener('click', () => {
        //     console.log('removed');
        // })

    }, []);



    return (
        <>{
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