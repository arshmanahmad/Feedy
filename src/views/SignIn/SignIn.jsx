import React from 'react'
import SignInForm from './SignInForm/SignInForm'
import { Route, Routes } from 'react-router-dom'
import ResetPassword from './ResetPassword/ResetPassword'
import ForgotPassword from './ForgotPassword/ForgotPassword'

const SignIn = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SignInForm />} />
                <Route path='/ForgotPassword' element={<ForgotPassword />} />
                <Route path='/resetPassword' element={<ResetPassword />} />
            </Routes>
        </>
    )
}

export default SignIn
