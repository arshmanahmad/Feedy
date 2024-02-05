import React from 'react'
import './Label.css';

const Label = ({ onClickFirstText, text, changeColoredText, color, onClick, className = '' }) => {
    return (
        <>
            <div className={`${className} description-para-container ${color === "blue" ? "blued" : " "}`}>
                <p className='description-text' onClick={onClickFirstText}>{text}</p> <span onClick={onClick}>  {changeColoredText}</span>
            </div >
        </>
    )
}

export default Label