import React, { useEffect, useState } from 'react'
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
import Cookies from 'js-cookie';

const OtpVerification = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [errors, setErrors] = useState({})
    const grabbedData = JSON.parse(localStorage.getItem('credentials'))
    const [otpLoading, setOtpLoading] = useState(false)
    const [timer, setTimer] = useState(50)
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
    const { firstNumber, secondNumber, thirdNumber, forthNumber } = otpData
    const joinedNum = `${firstNumber}${secondNumber}${thirdNumber}${forthNumber}`;

    const navigate = useNavigate()
    const checkValidation = () => {
        let error = {};
        if (firstNumber === "" || secondNumber === "" || thirdNumber === "" || forthNumber === "") {
            error.fillAllFields = true;
        }
        setErrors(error)
        return Object.keys(error).length === 0;
    }

    let error = {}
    const handleResendOtp = async () => {
        setTimer(50)
        setOtpLoading(true)
        await axios.post(baseUrl + "/api/generateOTP", {
            email: grabbedData.email
        }).then(response => {
            console.log(response);
            setOtpLoading(false)
            if (response.data.success) {
                error.popUp = response.data.message
            }
            else {
                error.popUp = response.data.message
            }
            setErrors(error)
        })
    }
    const login = async () => {
        let error = {};
        await axios.post(baseUrl + "/api/signin", {
            email: grabbedData.email,
            password: grabbedData.password,
        }).then(
            response => {
                if (response.data.success) {
                    navigate("/dashboard")
                    Cookies.set('token', response.data.token, { expires: 1 })
                    error.popUp = response.data.message
                }
                else {
                    error.popUp = response.data.message
                }
                setErrors(error)
            }
        )
    }
    const handleClick = async (e) => {
        e.preventDefault();
        if (checkValidation()) {
            setOtpLoading(true)
            await axios.post(baseUrl + "/api/verifyOTP", {
                email: grabbedData.email,
                otp: joinedNum,
            }).then(response => {
                console.log(response);
                setOtpLoading(false)
                if (response.data.success === true) {
                    login()
                    error.popUp = response.data.message
                }
                else if (response.data.success === false) {
                    error.popUp = response.data.message
                }
                setErrors(error)
            })
        }
    }

    useEffect(() => {
        if (timer > 0) {
            const timeOut = setTimeout(() => {
                setTimer(timer - 1)
            }, 1000);
            return () => clearTimeout(timeOut)
        }
    }, [timer])
    // signUpverification
    // chat
    // setTimeOut
    // parameter(callback,millisecond)
    // icon favicon change
    //app name
    //quetion of double qoute of otp and email
    return (
        <>
            <div className="otp-content-container flex-box col-sm-6 col-lg-7" >
                <div className='inner-otp-content-container'>
                    <H1 value="Verify OTP" />
                    <p className='otp-p'>Please Enter 4 Digit OTP to verify your account</p>
                    <InfoText text="We sent a code to  " className='SignUp-label1' changeColoredText={grabbedData.email} />
                    <form className="otp-input-container">
                        <div className="row otp-inputs">
                            <Input name="firstNumber" onChange={handleChange} className="otp" type="number" />
                            <Input name="secondNumber" onChange={handleChange} className="otp" type="number" />
                            <Input name="thirdNumber" onChange={handleChange} className="otp" type="number" />
                            <Input name="forthNumber" onChange={handleChange} className="otp" type="number" />
                        </div>
                        <ErrorPopup value={errors} />
                        <Button onClick={handleClick} disabled={otpLoading ? "disabled" : ""} text={otpLoading ? <Loader /> : "Verify"} />
                        <InfoText className='otp-label2' text="Didn't receive the code?" color="blue" onSecondTextClick={timer === 0 ? handleResendOtp : " "} changeColoredText={timer === 0 ? "Resend OTP" : `Resend after ${timer}s`} />
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