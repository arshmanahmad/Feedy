import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUpForm from './SignUpForm/SignUpForm'
import OtpVerification from './OtpVerification/OtpVerification'

const SignUp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignUpForm />} />
                <Route path="/verifyOtp" element={<OtpVerification />} />
            </Routes>
        </>
    )
}

export default SignUp
