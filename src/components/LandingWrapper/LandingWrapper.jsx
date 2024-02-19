import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './LandingWrapper.css'
import SignIn from '../../views/SignIn/SignIn'
import SignUp from '../../views/signUp/SignUp'

const LandingWrapper = () => {
    return (
        <div className="signIn-main-container">
            <div className="row signIn-inner-box">
                <div className="signIn-img-container  col-sm-6 col-lg-5">
                </div>
                <Routes>
                    <Route path='/SignIn/*' element={<SignIn />} />
                    <Route path='/*' element={<SignUp />} />
                </Routes>
            </div>
        </div>
    )
}

export default LandingWrapper
