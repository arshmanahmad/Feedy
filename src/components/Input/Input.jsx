import React from "react";
import './Input.css';
const Input = ({ maxLength, onInputClick, max, label, checked, onClick, icon, placeholder, type, onChange, name, disabled, className = "" }) => {
    return (
        <>
            <div className={`${className} input-container col-lg-6 col-md-12 col-sm-12 ${type === "checkBox" ? "checkBox" : " "}
            ${className === "otp" ? "otp " : ""}${type === "borderless" ? "borderless" : ""}`}>
                {label && <label>{label}</label>}
                <div className="input-border">
                    <input className="input"
                        placeholder={placeholder}
                        maxLength={maxLength}
                        type={type}
                        max={max}
                        onChange={onChange}
                        name={name}
                        disabled={disabled}
                        checked={checked}
                        onClick={onInputClick}
                    // required
                    />
                    {icon && <img className="input-icon" onClick={onClick} src={icon}></img>}
                </div>
            </div>
        </>
    )
}
export default Input