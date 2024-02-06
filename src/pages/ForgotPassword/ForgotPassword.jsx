import React, { useState } from 'react'
import "./ForgotPassword.css"
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import backArrow from './assets/icons/backArrow.png'
import ErrorPopup from '../../components/ErrorPopup/ErrorPopup';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [errorPop, setErrorPop] = useState('')
    const navigate = useNavigate()
    const isValidDetail = () => {
        if (email === "") {
            setErrorPop("Please fill the field")

        }
        else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            setErrorPop("Incorrect email format")
        }
        else {
            setErrorPop("Submitted")

        }
    }
    const handleSubmission = (e) => {
        e.preventDefault();
        isValidDetail()
    }
    const handleClick = () => {
        navigate("/")
    }
    return (
        <>
            <div className="forgot-main-container">
                <div className="row forgot-inner-box">
                    <div className="forgot-img-container  col-sm-6 col-lg-5">
                    </div>
                    <div className="forgot-content-container flex-box col-sm-6 col-lg-7" >
                        <div className='forgot-inner-content-container'>
                            <H1 value="Forgot Password?" />
                            <p className='forgot-p'>Enter the email address you used when you joined and w'll<br /> send you instructions to reset the password.</p>
                            <form className="signIn-input-container">
                                <div className="row">
                                    <Input label="Your Email" type='email' onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                                </div>
                                <ErrorPopup value={errorPop} />
                                <Button onClick={handleSubmission} text="Sign in" />
                            </form>
                        </div>
                        <div className="backLink-box">
                            <img src={backArrow} alt="" onClick={handleClick} />
                            <a className='back-link' onClick={handleClick}>Back to sign in</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ForgotPassword