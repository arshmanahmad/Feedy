import React from 'react'
import './ProfileBar.css';

const ProfileBar = ({ img, name, editText }) => {
    return (
        <>
            <div className='profile_container'>
                <img src={img} alt="" />
                <div className='profile_namingContainer'>
                    <div className='profileName'>{name}</div>
                    <div className='profileEdit_text'>{editText}</div>
                </div>
                <div>
                    <div className="profile_selectBox">
                        <select className='profileSelect_DropDown' name="" id="">

                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBar