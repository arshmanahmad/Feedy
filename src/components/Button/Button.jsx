import React from 'react'
import './Button.css'
const Button = ({ disabled, icon, onClick, text, type, className = '' }) => {
    const primaryButton = "primary_button"
    let buttonTypeClass = type ? `${primaryButton}--${type}` : '';
    return (
        <>
            <button
                onClick={onClick}
                className={`${className} ${primaryButton} ${buttonTypeClass}
                ${disabled === "disabled" ? `${primaryButton}--${disabled}` : ""}`}>
                {icon && <img src={icon} alt={text}></img>}
                {text && <span>{text}</span>}
            </button >
        </>
    )
}
export default Button