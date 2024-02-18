import React, { useState } from 'react'
import './OtpVerification.css'
import H1 from '../../../components/H1/H1';
import Input from '../../../components/Input/Input'
import InfoText from '../../../components/InfoText/InfoText';
import Button from '../../../components/Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import backArrow from '../../../assets/Icons/backArrow.png'
import axios from 'axios';
import Loader from '../../../components/Loader/Loader';
import ErrorPopup from '../../../components/ErrorPopup/ErrorPopup';

const OtpVerification = () => {
    const [errors, setErrors] = useState('')
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [otpLoading, setOtpLoading] = useState(false)
    const navigate = useNavigate()
    const [otpData, setOtpData] = useState({
        firstNumber: "",
        secondNumber: "",
        thirdNumber: "",
        forthNumber: "",
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setOtpData({
            ...otpData,
            [e.target.name]: value,
        })
    }
    const checkValidation = () => {
        let error = {};
        const { firstNumber, secondNumber, thirdNumber, forthNumber } = otpData
        if (firstNumber === "" || secondNumber === "" || thirdNumber === "" || forthNumber === "") {
            error.fillAllFields = true;
        }
        setErrors(error)
        return Object.keys(error).length === 0;
    }
    const handleClick = async (e) => {
        e.preventDefault();
        const { firstNumber, secondNumber, thirdNumber, forthNumber } = otpData
        const joinedNum = [firstNumber, secondNumber, thirdNumber, forthNumber].join('')
        let error = {}
        if (checkValidation()) {
            setOtpLoading(true)
            await axios.post(baseUrl + "/api/verifyOTP", {
                joinedNum,
            }).then(response => {
                setOtpLoading(false)
                if (response.data.success === true) {
                    navigate("/dashboard")
                }
                else if (response.data.success === false) {
                    error.popUp = response.data.message
                }
                setErrors(error)
            })
        }
    }
    // signUpverification
    return (
        <>
            <div className="otp-content-container flex-box col-sm-6 col-lg-7" >
                <div className='inner-otp-content-container'>
                    <H1 value="Verify OTP" />
                    <p className='otp-p'>Please Enter 4 Digit OTP to verify your account</p>
                    <InfoText text="We sent a code to  " className='SignUp-label1' changeColoredText="  arshman****@gmail.com" />
                    <form className="otp-input-container">
                        <div className="row otp-inputs">
                            <Input name="firstNumber" onChange={handleChange} className="otp" type="number" />
                            <Input name="secondNumber" onChange={handleChange} className="otp" type="number" />
                            <Input name="thirdNumber" onChange={handleChange} className="otp" type="number" />
                            <Input name="forthNumber" onChange={handleChange} className="otp" type="number" />
                        </div>
                        <ErrorPopup value={errors} />
                        <Button onClick={handleClick} text={otpLoading ? <Loader /> : "Verify"} />
                        <InfoText className='otp-label2' text=" Didn't receive the code?" color="blue" changeColoredText="Resend after 20s" />
                    </form>
                    <div className="otp-backLink-box">
                        <img src={backArrow} alt="" onClick={handleClick} />
                        <NavLink to="/" className='otp-back-link' >Back to sign up</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpVerification