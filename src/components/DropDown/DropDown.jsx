import React, { useState } from 'react'
import './DropDown.css';
import dropDown from '../../assets/Images/46.png';

const DropDown = ({ option }) => {
    const [hideOption, setHideOption] = useState(false);
    const [value, setValue] = useState(null)
    let defaultValue = option[0];
    const handleToggling = () => {
        setHideOption(!hideOption)
    }
    const handleShowOption = (item) => {
        console.log(item);
        setValue(item)

    }
    return (
        <>
            <div className='dropdown_box flex-box'>
                <div className="dropDown_iconContainer">
                    {value ? value : defaultValue} <img onClick={handleToggling} className='dropdown_img' src={dropDown}></img>
                </div>
                <div id='option' className={hideOption ? "dropdown_options" : "hide_option"}>
                    {option.map((item, index) => {
                        return <span onClick={() => handleShowOption(item)} className='dropdown_optionText flex-box'>{item}</span>
                    })}
                </div>
            </div>
        </>
    )
}

export default DropDown