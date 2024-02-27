import React from 'react'
import './Button.css'
const Button = ({ disabled, icon, onClick, text, type, className = '' }) => {
    const primaryButton = "primary_button"
    let buttonTypeClass = type ? `${primaryButton}--${type}` : '';
    const isDisabled = disabled ? `${primaryButton}--${disabled}` : "";
    return (
        <>
            <button
                onClick={onClick}
                className={`${className} ${primaryButton} ${buttonTypeClass} ${isDisabled}`}
                disabled={disabled}>
                {icon && <img src={icon} alt={text}></img>}
                {text && <span>{text}</span>}
            </button >
        </>
    )
}
export default Button