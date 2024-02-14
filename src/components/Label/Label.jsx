import React from 'react'
import './Label.css';

const Label = ({ text, changeColoredText, color, onClick, className = '' }) => {
    return (
        <>
            <div className={`${className} description-para-container ${color === "blue" ? "blued" : " "}`}>
                <p className='description-text' onClick={onClick}>{text}</p> <span >{changeColoredText}</span>
            </div >
        </>
    )
}

export default Label