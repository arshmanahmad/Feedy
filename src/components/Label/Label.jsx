import React from 'react'
import './Label.css';

const Label = ({ text, changeColoredText, color, onClick, className = '' }) => {
    return (
        <>
            <div className={`${className} description-para-container ${color === "blue" ? "blued" : " "}`}>
                <p className='description-text'>{text}<span onClick={onClick}> {changeColoredText}</span></p>
            </div >
        </>
    )
}

export default Label