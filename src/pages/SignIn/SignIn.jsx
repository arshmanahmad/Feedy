import React, { useState } from 'react'
import "./SignIn.css"
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../assets/Icons/icon view password.png'
import visibilityIcon from "../../assets/Icons/visibility-less-weight.png"
import ErrorPopup from "../../components/ErrorPopup/ErrorPopup"
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
const SignIn = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    console.log(baseUrl)
    const [signInLoading, setSignInLoading] = useState(false)
    const [passwordType, setPasswordType] = useState("password")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [check, setCheck] = useState(false)
    const [errorPopup, setErrorPopUp] = useState('');
    const navigate = useNavigate()
    const validator = () => {
        let error = ""
        if (email === "" || password === "") {
            error = "Please fill in all the fields"
        }
        else if (password.length < 7) {
            error = "Password must be at least 8 characters"
        }
        else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            error = "Incorrect email format"
        }
        else if (check === false) {
            error = "Check out the box"
        }
        else {
            navigate("/SignUp/HomePage")
        }
        setErrorPopUp(error)
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSignInLoading(true)
        await axios.post(baseUrl + "/api/signin", {
            email,
            password,
        }).then(response => {
            setSignInLoading(false)
            console.log(response);
            if (response.data.token) {
                navigate("/HomePage")
            }
            else {
                setErrorPopUp(response.data.message)
            }
        })
    }
    const handleClick = () => {
        navigate("/SignIn/ForgotPassword")
    }
    const handlePathSignUp = () => {
        navigate("/");

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
                                    <Input label="Your Email" type='email' onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                                    <Input label="Password" onClick={handleChangePasswordVisibility} onChange={(e) => setPassword(e.target.value)} icon={passwordType === "password" ? hideIcon : visibilityIcon} type={passwordType} placeholder="password" />
                                </div>
                                <ErrorPopup value={errorPopup} />
                                <div className="signIn-label-box">
                                    <Input type="checkBox" onInputClick={handleCheckCheckbox} checked={check} /><Label onClickFirstText={handleCheck} onClick={handleClick} text="Remember me " className='signIn-label1' changeColoredText="Forgot password?" />
                                </div>
                                <Button onClick={handleFormSubmit} text={signInLoading ? <Loader /> : "Sign in"} />
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