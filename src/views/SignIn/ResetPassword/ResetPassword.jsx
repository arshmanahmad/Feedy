import React, { useState } from 'react'
import './ResetPassword.css'
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import backIcon from '../../assets/Icons/backArrow.png'
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../assets/Icons/icon view password.png'
import visibilityIcon from '../../assets/Icons/visibility-less-weight.png'
import ErrorPopup from "../../components/ErrorPopup/ErrorPopup"
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
const SignUp = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    console.log(baseUrl)

    const [password, setPassword] = useState('')
    const [blankFieldError, setBlankFieldError] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputPasswordType, setPasswordInputType] = useState('password');
    const [inputConfirmPassType, setInputConfirmPassType] = useState('password');
    const [resetLoading, setResetLoading] = useState(false);
    const navigate = useNavigate()

    const handleClick = async (e) => {
        setResetLoading(true)
        e.preventDefault();
        await axios.post(baseUrl + "/api/resetPassword", {

        }).then(response => {
            setResetLoading(false)

        })
    }
    const handleReverse = () => {

    }
    const handleSignIn = () => {
        navigate("/SignUp/SignIn")
    }
    const handleShowPassword = () => {
        if (inputPasswordType === "password") {
            setPasswordInputType("text")
        }
        else {
            setPasswordInputType("password")
        }
    }
    const handleShowConfirmPass = () => {
        if (inputConfirmPassType === "password") {
            setInputConfirmPassType("text")
        }
        else {
            setInputConfirmPassType("password")
        }
    }
    const handleCheck = () => {
        setIsChecked(!isChecked)
    }
    const handleCheckBox = () => {
        setIsChecked(!isChecked)
    }
    return (
        <>
            <div className="signUp-main-container">
                <div className="row inner-box">
                    <div className="signUp-img-container  col-sm-6 col-lg-5">
                    </div>
                    <div className="signUp-content-container flex-box col-sm-6 col-lg-7" >
                        <div className='content-container'>
                            <H1 value="Reset password?" />
                            <p className='otp-p'>Password must be at least 8 characters.</p>
                            <form className="signUp-input-container">
                                <div className="row resetPassword-input">
                                    <Input label="Password" onChange={(e) => setPassword(e.target.value)} icon={inputPasswordType === "password" ? hideIcon : visibilityIcon} id="password" onClick={handleShowPassword} type={inputPasswordType} placeholder="password" />
                                    <Input label="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} icon={inputConfirmPassType === "password" ? hideIcon : visibilityIcon} onClick={handleShowConfirmPass} type={inputConfirmPassType} placeholder="confirm password" />
                                </div>
                                <ErrorPopup value={blankFieldError} />
                                <Button onClick={handleClick} text={resetLoading ? <Loader /> : "Send"} />
                                <div className="otp-backLink-box">
                                    <img src={backIcon} alt="" onClick={handleReverse} />
                                    <a className='otp-back-link' onClick={handleReverse}>Back to sign up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp