import React, { useState } from 'react'
import './ForgotPassword.css'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../../assets/Icons/backArrow.png'
import ErrorPopup from '../../../components/ErrorPopup/ErrorPopup';
import axios from 'axios';
import Loader from '../../../components/Loader/Loader';
import H1 from '../../../components/H1/H1';

const ForgotPassword = () => {
    const [forgetLoading, setForgetLoading] = useState(false)
    const [errorPop, setErrorPop] = useState({})
    const baseUrl = process.env.REACT_APP_BASE_URL
    const navigate = useNavigate()
    const [forgotPassData, setForgotPassData] = useState({
        email: "",
    })
    const onChange = (e) => {
        const value = e.target.value;
        setForgotPassData({
            ...forgotPassData,
            [e.target.name]: value
        })
    }
    const isValidDetail = () => {
        const { email } = forgotPassData;
        let error = {};
        if (email === "") {
            error.fillAllFields = true
        }
        else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            error.invalidEmail = true
        }
        setErrorPop(error)
        return Object.keys(error).length === 0;
    }
    const handleSubmission = async (e) => {
        e.preventDefault();
        if (isValidDetail()) {
            setForgetLoading(true)
            const error = {};
            await axios.post(baseUrl + "/api/forgetPassword", {
                email: forgotPassData.email
            }).then(
                response => {
                    setForgetLoading(false)
                    console.log(response);
                    if (response.data.email) {
                        error.popUp = response.data.message;
                    }
                    else {
                        error.popUp = response.data.message;
                    }
                }
            )
            setErrorPop(error)
        }
    }
    const handleClick = () => {
        navigate("/SignIn")
    }
    return (
        <>
            <div className="forgot-content-container flex-box col-sm-6 col-lg-7" >
                <div className='forgot-inner-content-container'>
                    <H1 value="Forgot Password?" />
                    <p className='forgot-p'>Enter the email address you used when you joined and w'll<br /> send you instructions to reset the password.</p>
                    <form className="signIn-input-container">
                        <div className="row">
                            <Input label="Your Email" name="email" type='email' onChange={onChange} placeholder="email" />
                        </div>
                        <ErrorPopup value={errorPop} />
                        <Button disabled={forgetLoading ? "disabled" : ""} onClick={handleSubmission} text={forgetLoading ? <Loader /> : "Reset password"} />
                    </form>
                    <div className="backLink-box">
                        <img src={backArrow} alt="" onClick={handleClick} />
                        <a className='back-link' onClick={handleClick}>Back to sign in</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword