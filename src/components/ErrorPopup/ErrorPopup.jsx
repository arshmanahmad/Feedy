import React from 'react'
import './ErrorPopup.css'

const ErrorPopup = ({ value = {} }) => {
    return (
        <>
            {value.fillAllFields && <p className='error-popup'>Input All Fields</p>}
            {value.invalidEmail && <p className='error-popup'>Invalid Email</p>}
            {value.passLength && <p className='error-popup'>Password must be at least 8 characters</p>}
            {value.passNotMatch && <p className='error-popup'>Passwords did'nt match</p>}
            {value.isAgreed && <p className='error-popup'>Agress Terms and Comditions</p>}
        </>
    )
}

export default ErrorPopup