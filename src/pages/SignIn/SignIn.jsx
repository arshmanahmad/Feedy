import React from 'react'
import "./SignIn.css"
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import iconView from '../../assets/Icons/icon view password.png'

const SignIn = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/SignIn/ForgotPassword")
    }
    return (
        <>
            <div className="signIn-main-container">
                <div className="row signIn-inner-box">
                    <div className="signIn-img-container  col-sm-6 col-lg-5">
                    </div>
                    <div className="signIn-content-container flex-box col-sm-6 col-lg-7" >
                        <div className='signIn-inner-content-container'>
                            <H1 value="Sign In" />
                            <p className='signIn-p'>or sign in using email address</p>
                            <form className="signIn-input-container">
                                <div className="row">
                                    <Input label="Your Email" type='email' placeholder="Tonynguyen@example.com" />
                                    <Input label="Password" icon={iconView} type='password' placeholder="******" />
                                </div>
                                <div className="signIn-label-box">
                                    <Input type="checkBox" /><Label onClick={handleClick} text="Remember me " className='signIn-label1' changeColoredText="Forgot password?" />
                                </div>
                                <Button text="Sign in" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn