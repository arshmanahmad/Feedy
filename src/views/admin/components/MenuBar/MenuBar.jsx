import React from 'react';
import "./MenuBar.css"

const MenuBar = ({ array = [], onClick }) => {

    return (
        <>
            <div className='menu_container'>
                {array.map((item) => {
                    return <p onClick={onClick} className='menu_text'>{item}</p>
                })}
            </div>
        </>
    )
}

export default MenuBar