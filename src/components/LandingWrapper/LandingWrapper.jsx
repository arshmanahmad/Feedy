import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './LandingWrapper.css'
import SignIn from '../../views/SignIn/SignIn'
import SignUp from '../../views/signUp/SignUp'
import { AppContext } from '../Context/AppData'
import OtpVerification from '../../views/signUp/OtpVerification/OtpVerification'
import OtpVerificationPopup from '../OtpVerificactionPopup/OtpVerificationPopup'
import IntroModel from '../../components/IntroModel/IntroModel'

const LandingWrapper = () => {

    const { otpVerification, intro, setIntro, setOtpVerification } = useContext(AppContext);
    return (
        <div className="signIn-main-container">
            {intro ? <IntroModel /> : ""}
            <div className="row signIn-inner-box">
                <div className="signIn-img-container  col-sm-6 col-lg-5">
                    {otpVerification === 1 ? <OtpVerificationPopup /> : ""}
                    {otpVerification === 0 ? <OtpVerificationPopup type="invalid_otp" /> : ""}
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
