import React from "react";
import './Input.css';
const Input = ({ maxLength, ref, onInputClick, max, label, checked, onClick, icon, placeholder, type, onChange, name, day, disabled, className = "" }) => {
    let inputRef = React.createRef();
    return (
        <>
            <div className={`${className} input-container col-lg-6 col-md-12 col-sm-12 ${type === "checkBox" ? "checkBox" : " "}
            ${className === "otp" ? "otp col-lg-4 col-md-6 col-sm-12" : ""}${type === "borderless" ? "borderless" : ""}${type === "borderless_fullLength" ? "borderless_fullLength" : ""}`}>
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
                    />
                    {icon && <img className="input-icon" onClick={onClick} src={icon}></img>}
                </div>
            </div>
        </>
    )
}
export default Input
