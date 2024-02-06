import React from 'react'
import './ErrorPopup.css'

const ErrorPopup = ({ value }) => {
    return (
        <>
            <p className='error-popup'>{value}</p>
        </>
    )
}

export default ErrorPopup