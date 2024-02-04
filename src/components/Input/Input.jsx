import React from "react";
import './Input.css';
const Input = ({ label, onClick, icon, placeholder, type, onChange, name, disabled, className = "" }) => {
    return (
        <>
            <div className={`${className} input-container col-lg-6 col-md-12 col-sm-12 ${type === "checkBox" ? "checkBox" : " "}`}>
                {label && <label>{label}</label>}
                <div className="input-border">
                    <input className="input"
                        placeholder={placeholder}
                        type={type}
                        onChange={onChange}
                        name={name}
                        disabled={disabled}
                        required
                    />
                    {icon && <img onClick={onClick} src={icon}></img>}
                </div>
            </div>
        </>
    )
}
export default Input