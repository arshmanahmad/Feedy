import React from 'react'
import './UserInfoCard.css'

const UserInfoCard = ({ icon, numbers, label, currency }) => {
    return (
        <>
            <div className='infoCard-container col-lg-6 col-md-12 col-sm-12'>
                <img src={icon} alt="" />
                <div className="infoCard-currency-container">
                    {currency && <p>{currency}</p>}
                    <p className='infoCard-numbers'>{numbers}</p>
                </div>
                <p className='infoCard-label'>{label}</p>
            </div>
        </>
    )
}

export default UserInfoCard