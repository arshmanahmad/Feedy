import React, { useState } from 'react'
import './OtpVerification.css'
import H1 from '../../../components/H1/H1';
import Input from '../../../components/Input/Input'
import Label from '../../../components/Label/Label';
import Button from '../../../components/Button/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import backArrow from '../../../assets/Icons/backArrow.png'
import axios from 'axios';
import Loader from '../../../components/Loader/Loader';

const OtpVerification = () => {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState('');
    const [thirdNumber, setThirdNumber] = useState('');
    const [forthNumber, setForthNumber] = useState('');
    const [totalNumber, setTotalNumbers] = useState('')
    const baseUrl = process.env.REACT_APP_BASE_URL
    console.log(baseUrl)
    const [otpLoading, setOtpLoading] = useState(false)

    const navigate = useNavigate()

    const handleClick = async (e) => {
        setOtpLoading(true)
        e.preventDefault();
        setTotalNumbers(firstNumber, secondNumber, thirdNumber, forthNumber);
        console.log(totalNumber)
        // await axios.post(baseUrl + "/api/verifyOTP", {
        //     firstNumber,
        //     secondNumber,
        //     thirdNumber,
        //     forthNumber,
        // }).then(response => {
        //     setOtpLoading(false)
        //     if(response.data.otp)
        // })
    }

    const handleSignIn = () => {

    }



    return (
        <>
            <div className="otp-content-container flex-box col-sm-6 col-lg-7" >
                <div className='inner-otp-content-container'>
                    <H1 value="Verify OTP" />
                    <p className='otp-p'>Please Enter 4 Digit OTP to verify your account</p>
                    <Label text="We sent a code to  " className='SignUp-label1' changeColoredText="  arshman****@gmail.com" />
                    <form className="otp-input-container">
                        <div className="row otp-inputs">
                            <Input onChange={(e) => { setFirstNumber(e.target.value) }} max="0" className="otp" type="number" />
                            <Input onChange={(e) => { setSecondNumber(e.target.value) }} className="otp" type="number" />
                            <Input onChange={(e) => { setThirdNumber(e.target.value) }} className="otp" type="number" />
                            <Input onChange={(e) => { setForthNumber(e.target.value) }} className="otp" type="number" />
                        </div>
                        <Button onClick={handleClick} text={otpLoading ? <Loader /> : "Verify"} />
                        <Label onClick={handleSignIn} className='otp-label2' text=" Didn't receive the code?" color="blue" changeColoredText="Resend after 20s" />
                    </form>
                    <div className="otp-backLink-box">
                        <img src={backArrow} alt="" onClick={handleClick} />
                        <NavLink to="/signUp" className='otp-back-link' >Back to sign up</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpVerification