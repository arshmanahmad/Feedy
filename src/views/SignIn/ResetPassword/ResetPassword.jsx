import './ResetPassword.css'
import React, { useState } from 'react'
import H1 from '../../../components/H1/H1';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import backIcon from "../../../assets/Icons/backArrow.png"
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../../assets/Icons/icon view password.png'
import visibilityIcon from '../../../assets/Icons/visibility-less-weight.png'
import ErrorPopup from '../../../components/ErrorPopup/ErrorPopup';
import Loader from '../../../components/Loader/Loader';
import axios from 'axios';
const SignUp = () => {
    const navigate = useNavigate()
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [errors, setErrors] = useState({})
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const [resetLoading, setResetLoading] = useState(false);
    const [forgotPassData, setForgotPassData] = useState({
        password: "",
        confirmPassword: "",
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setForgotPassData({
            ...forgotPassData,
            [e.target.name]: value
        })
    }
    const validator = () => {
        let error = {};
        const { password, confirmPassword } = forgotPassData;
        if (password === "" || confirmPassword === "") {
            error.fillAllFields = true;
        }
        else if (password !== confirmPassword) {
            error.passNotMatch = true;
        }
        setErrors(error)
        return Object.keys(error).length === 0;
    }
    const handleClick = async (e) => {
        e.preventDefault();
        let error = {};
        if (validator()) {
            setResetLoading(true)
            await axios.put(baseUrl + "/api/resetPassword", {
                password: forgotPassData.password,
                confirmPassword: forgotPassData.confirmPassword
            }).then(response => {
                setResetLoading(false);
                if (response.data.success === true) {
                    navigate("/homepage/*")
                    error.popUp = response.data.message;
                }
                else if (response.data.success === false) {
                    error.popUp = response.data.message
                }
                setErrors(error)
            })
        }
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
                                    <Input label="Password" onChange={handleChange} name="password" icon={isShowPassword2 ? visibilityIcon : hideIcon} id="password" onClick={() => setIsShowPassword2(!isShowPassword2)} type={isShowPassword2 ? "text" : "password"} placeholder="password" />
                                    <Input label="Confirm Password" onChange={handleChange} name="confirmPassword" icon={isShowPassword ? visibilityIcon : hideIcon} onClick={() => setIsShowPassword(!isShowPassword)} type={isShowPassword ? "text" : "password"} placeholder="confirm password" />
                                </div>
                                <ErrorPopup value={errors} />
                                <Button onClick={handleClick} text={resetLoading ? <Loader /> : "Send"} />
                                <div className="otp-backLink-box">
                                    <img src={backIcon} alt="" onClick={() => navigate("/*")} />
                                    <a className='otp-back-link' onClick={() => navigate("/*")}>Back to sign up</a>
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