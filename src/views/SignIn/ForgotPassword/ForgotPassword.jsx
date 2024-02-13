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
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [email, setEmail] = useState('')
    const [forgetLoading, setForgetLoading] = useState(false)
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
            navigate("/SignUp/HomePage")

        }
    }
    // isValidDetail()
    const handleSubmission = async (e) => {
        setForgetLoading(true)
        e.preventDefault();
        await axios.post(baseUrl + "/api/forgetPassword", {
            email,
        }).then(
            response => {
                setForgetLoading(false)
                console.log(response);
                if (response.data.email) {
                    setErrorPop(response.data.message)
                }
                else {
                    setErrorPop(response.data.message)
                }
            }
        )
    }
    const handleClick = () => {
        navigate("/signin")
    }
    return (
        <>
            <div className="forgot-content-container flex-box col-sm-6 col-lg-7" >
                <div className='forgot-inner-content-container'>
                    <H1 value="Forgot Password?" />
                    <p className='forgot-p'>Enter the email address you used when you joined and w'll<br /> send you instructions to reset the password.</p>
                    <form className="signIn-input-container">
                        <div className="row">
                            <Input label="Your Email" type='email' onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                        </div>
                        <ErrorPopup value={errorPop} />
                        <Button onClick={handleSubmission} text={forgetLoading ? <Loader /> : "Reset password"} />
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