import React, { useContext, useEffect, useRef, useState } from 'react'
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
import { AppContext } from '../../../components/Context/AppData';

const OtpVerification = () => {
    const { otpVerification, setOtpVerification } = useContext(AppContext)
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
    const inputRefs = [useRef(), useRef(), useRef(), useRef()]
    useEffect(() => {
        const handleKeyDown = (event) => {
            const activeInput = document.activeElement;
            if (event.keyCode === 8 || event.key === "Backspace") {
                const activeInputName = activeInput.getAttribute("name")
                if (activeInput.tagName === "INPUT") {
                    const activeValue = activeInput.value
                    const getPreviousName = getPerviousField(activeInputName)
                    let previousInput;
                    if (activeValue.length === 1) {
                        previousInput = document.getElementsByName(getPreviousName)[1];
                    }
                    else if (activeValue.length === 0) {
                        previousInput = document.getElementsByName(getPreviousName)[0];
                    }
                    if (previousInput) {
                        activeInput.value = ""
                        previousInput.focus();
                    }
                }
            }
            //aaasasadadsadp';';sdfsf
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    let error = {}
    const handleChange = (maxLength, e) => {
        setOtpVerification(-1)
        const value = e.target.value;
        let fieldName = e.target.name
        setOtpData({
            ...otpData,
            [e.target.name]: value,
        })
        if (value.length > maxLength) {
            e.target.value = value.slice(0, maxLength)
        }
        if (value && fieldName !== "forthNumber") {
            const nextFieldName = getNextFieldName(fieldName);
            const nextInput = document.getElementsByName(nextFieldName)[0];
            if (nextInput) {
                nextInput.focus();
            }
        }

    };

    const getNextFieldName = (currentFieldName) => {
        switch (currentFieldName) {
            case "firstNumber":
                return "secondNumber";
            case "secondNumber":
                return "thirdNumber";
            case "thirdNumber":
                return "forthNumber";
            default:
                return "";
        }
    }
    const getPerviousField = (currentFieldName) => {
        switch (currentFieldName) {
            case "forthNumber":
                return "thirdNumber"

            case "thirdNumber":
                return "secondNumber";
            case "secondNumber":
                return "firstNumber";
            default:
                return "";
        }
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
    const handleResendOtp = async () => {
        await axios.post(baseUrl + "/api/generateOTP", {
            email: grabbedData.email
        }).then(response => {
            console.log(response);
            if (response.data.success) {
                error.popUp = response.data.message
            }
            else {
                error.popUp = response.data.message
            }
            setErrors(error)
        })
        setTimer(50)
    }
    const login = async () => {
        await axios.post(baseUrl + "/api/signin", {
            email: grabbedData.email,
            password: grabbedData.password,
        }).then(
            response => {
                if (response.data.success) {
                    navigate("/admin/home")
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
                    setOtpVerification(1)
                }
                else if (response.data.success === false) {
                    error.popUp = response.data.message
                    setOtpVerification(0)
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
                            <Input name="firstNumber" onChange={(e) => handleChange(1, e)} className="otp" type="number" />
                            <Input name="secondNumber" onChange={(e) => handleChange(1, e)} className="otp" type="number" />
                            <Input name="thirdNumber" onChange={(e) => handleChange(1, e)} className="otp" type="number" />
                            <Input name="forthNumber" onChange={(e) => handleChange(1, e)} className="otp" type="number" />
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