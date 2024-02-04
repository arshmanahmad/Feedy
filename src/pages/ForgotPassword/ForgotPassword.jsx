import React from 'react'
import "./ForgotPassword.css"
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import backArrow from './assets/icons/backArrow.png'

const ForgotPassword = () => {
    const navigate = useNavigate()
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
                            <H1 value="ForGot Password?" />
                            <p className='forgot-p'>Enter the email address you used when you joined and w'll<br /> send you instructions to reset the password.</p>
                            <form className="signIn-input-container">
                                <div className="row">
                                    <Input label="Your Email" type='email' placeholder="Tonynguyen@example.com" />
                                </div>
                                <Button text="Sign in" />
                            </form>
                        </div>
                        <div className="backLink-box">
                            <img src={backArrow} alt="" onClick={handleClick} /><a className='back-link' onClick={handleClick}>Back to sign in</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ForgotPassword