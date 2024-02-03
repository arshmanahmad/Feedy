import React from 'react'
import "./ForgotPassword.css"
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';

const ForgotPassword = () => {
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
                        <span></span><a className='back-link'>Back to sign in</a>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ForgotPassword