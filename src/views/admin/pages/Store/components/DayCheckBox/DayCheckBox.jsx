import React from 'react'
import './DayCheckBox.css';
const DayCheckBox = ({ label, value }) => {
    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-12 day_InputContainer'>
                <input type="checkbox" value={value} className='day_input' />
                <label className='day_checkLabel' htmlFor="">{label}</label>
            </div>
        </>
    )
}

export default DayCheckBox