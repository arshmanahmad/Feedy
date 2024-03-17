import React from 'react';
import "./MenuBar.css"

const MenuBar = ({ array = [] }) => {

    return (
        <>
            <div className='menu_container'>
                {array.map((item) => {
                    return <p onClick={item.onClick} className='menu_text'>{item.label}</p>
                })}
            </div>
        </>
    )
}

export default MenuBar