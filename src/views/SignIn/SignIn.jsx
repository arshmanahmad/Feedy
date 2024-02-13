import React from 'react'
import SignInForm from './SignInForm/SignInForm'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './ForgotPassword/ForgotPassword'

const SignIn = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SignInForm />} />
                <Route path='/ForgotPassword' element={<ForgotPassword />} />
            </Routes>
        </>
    )
}

export default SignIn
