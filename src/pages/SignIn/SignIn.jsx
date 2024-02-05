import React, { useState } from 'react'
import "./SignIn.css"
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../assets/Icons/icon view password.png'
import visibilityIcon from "../../assets/Icons/visibility-less-weight.png"

const SignIn = () => {
    const [passwordType, setPasswordType] = useState("password")
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/SignIn/ForgotPassword")
    }
    const handlePathSignUp = () => {
        navigate("/")

    }
    const handleChangePasswordVisibility = () => {
        if (passwordType === "password") {
            setPasswordType("text")
        }
        else {
            setPasswordType("password")
        }
    }
    const handleCheck = () => {
        setCheck(!check)
    }
    const handleCheckCheckbox = () => {
        setCheck(!check)

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
                                    <Input label="Your Email" type='email' placeholder="email" />
                                    <Input label="Password" onClick={handleChangePasswordVisibility} onChange={(e) => setPassword(e.target.value)} icon={passwordType === "password" ? visibilityIcon : hideIcon} type={passwordType} placeholder="password" />
                                </div>
                                <div className="signIn-label-box">
                                    <Input type="checkBox" onInputClick={handleCheckCheckbox} checked={check} /><Label onClickFirstText={handleCheck} onClick={handleClick} text="Remember me " className='signIn-label1' changeColoredText="Forgot password?" />
                                </div>
                                <Button text="Sign in" />
                            </form>
                            <Label className='SignIn-path-label' text="Want to go back" color="blue" onClick={handlePathSignUp} changeColoredText="for Sign Up?" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn