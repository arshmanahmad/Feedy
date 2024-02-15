import React from 'react'
import './InfoText.css';

const InfoText = ({ text, changeColoredText, color, onFirstTextClick, onSecondTextClick, className = '' }) => {
    return (
        <>
            <div className={`${className} description-para-container ${color === "blue" ? "blued" : " "}`}>
                <p className='description-text' onClick={onFirstTextClick}>{text}</p> <span onClick={onSecondTextClick}>{changeColoredText}</span>
            </div >
        </>
    )
}

export default InfoText