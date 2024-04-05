import React from 'react'
import './DayCheckBox.css';
const DayCheckBox = ({ label, value, checked, onChange, type, name }) => {
    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-12 day_InputContainer'>
                <input type={type} checked={checked} onChange={onChange} name={name} value={value} className='day_input' />
                <label className='day_checkLabel' htmlFor="">{label}</label>
            </div>
        </>
    )
}

export default DayCheckBox