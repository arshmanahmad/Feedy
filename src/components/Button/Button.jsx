import React from 'react'
import './Button.css'

const Button = ({ icon, onclick, text, type, className = '' }) => {
    return (
        <>
            <button
                onclick={onclick}
                className={`${className} primary_button 
            ${type === "outlined" ? "primary_button--outlined" : " "}
            ${type === "save" ? "primary_button--save" : " "}
            ${type === "cancel" ? "primary_button--cancel" : " "}  
            ${type === 'update' ? "primary_button--update" : " "}`}>
                {icon && <img src={icon} alt={text}></img>}
                {text && <span>{text}</span>}
            </button>
        </>
    )
}
export default Button