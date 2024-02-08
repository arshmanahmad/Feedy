import React, { useState } from 'react'
import './SignUp.css'
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../assets/Icons/icon view password.png'
import visibilityIcon from '../../assets/Icons/visibility-less-weight.png'
import ErrorPopup from "../../components/ErrorPopup/ErrorPopup"
const SignUp = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [blankFieldError, setBlankFieldError] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputPasswordType, setPasswordInputType] = useState('password');
    const [inputConfirmPassType, setInputConfirmPassType] = useState('password');

    const navigate = useNavigate()
    const checkValidation = () => {
        let error = "";
        if (name === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
            error = "Please fill in all fields"
        }
        else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            error = "Incorrect email format"
        }
        else if (password.length < 7) {
            error = "Password must be at least 8 characters"
        }
        else if (password !== confirmPassword) {
            error = "Password & confirm password is not same"
        }
        else if (isChecked === false) {
            error = "Check out the box"
        }
        else {
            navigate("/SignUp/HomePage")
        }
        setBlankFieldError(error)
    }

    const handleClick = (e) => {
        e.preventDefault();
        checkValidation()
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
                            <H1 value="Create Your Account" />
                            <form className="signUp-input-container">
                                <div className="row">
                                    <Input label="Name" onChange={(e) => setName(e.target.value)} type='text' placeholder="name" />
                                    <Input label="Last Name" onChange={(e) => setLastName(e.target.value)} type='text' placeholder="last name" />
                                    <Input label="Your Email" onChange={(e) => setEmail(e.target.value)} type='email' placeholder="email" />
                                    <Input label="Password" onChange={(e) => setPassword(e.target.value)} icon={inputPasswordType === "password" ? visibilityIcon : hideIcon} id="password" onClick={handleShowPassword} type={inputPasswordType} placeholder="password" />
                                    <Input label="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} icon={inputConfirmPassType === "password" ? visibilityIcon : hideIcon} onClick={handleShowConfirmPass} type={inputConfirmPassType} placeholder="confirm password" />
                                </div>
                                <ErrorPopup value={blankFieldError} />
                                <div className="signUp-label-box">
                                    <Input type="checkBox" onInputClick={handleCheckBox} checked={isChecked} /><Label onClickFirstText={handleCheck} text="I accept the   " className='SignUp-label1' changeColoredText="  Terms and Conditions" />
                                </div>
                                <Button onClick={handleClick} text="Sign in" />
                            </form>
                            <Label onClick={handleSignIn} className='SignUp-label2' text=" Already have an account?" color="blue" changeColoredText="Sign in" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp