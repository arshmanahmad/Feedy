import React, { useState } from 'react'
import './OtpVerification.css'
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/Icons/backArrow.png'

import axios from 'axios';
const SignUp = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    console.log(baseUrl)

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post(baseUrl + "/api/verifyOTP", {

        }).then(response => {

        })
    }

    const handleSignIn = () => {

    }



    return (
        <>
            <div className="otp-main-container">
                <div className="row otp-inner-box">
                    <div className="otp-img-container  col-sm-6 col-lg-5">
                    </div>
                    <div className="otp-content-container flex-box col-sm-6 col-lg-7" >
                        <div className='inner-otp-content-container'>
                            <H1 value="Verify OTP" />
                            <p className='otp-p'>Please Enter 4 Digit OTP to verify your account</p>
                            <Label text="We sent a code to  " className='SignUp-label1' changeColoredText="  arshman****@gmail.com" />
                            <form className="otp-input-container">
                                <div className="row otp-inputs">
                                    <Input max="0" className="otp" type="number" />
                                    <Input className="otp" type="number" />
                                    <Input className="otp" type="number" />
                                    <Input className="otp" type="number" />
                                </div>
                                <Button onClick={handleClick} text="Verify" />
                                <Label onClick={handleSignIn} className='otp-label2' text=" Didn't receive the code?" color="blue" changeColoredText="Resend after 20s" />
                            </form>
                            <div className="otp-backLink-box">
                                <img src={backArrow} alt="" onClick={handleClick} />
                                <a className='otp-back-link' onClick={handleClick}>Back to sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp