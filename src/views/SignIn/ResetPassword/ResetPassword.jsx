import './ResetPassword.css'
import React, { useState } from 'react'
import H1 from '../../../components/H1/H1';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import backIcon from "../../../assets/Icons/backArrow.png"
import { useLocation, useNavigate } from 'react-router-dom';
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
    const location = useLocation();
    const parts = location.pathname.split("/")
    const token = parts[parts.length - 1];
    const userID = parts[parts.length - 2];
    console.log(parts);
    console.log(token);
    console.log(userID);
    console.log(forgotPassData.password);

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
    let error = {};
    const verifyToken = async () => {
        setResetLoading(true)
        await axios.post(baseUrl + "/api/verifyToken", {
            token: token,
            userId: userID
        }).then(response => {
            setResetLoading(false);
            if (response.data.success) {
                return true
            }
            else {
                error.popUp = response.data.message
                return false
            }
        })
        setErrors(error)
    }
    const handleClick = async (e) => {
        e.preventDefault();
        if (validator()) {
            if (verifyToken()) {
                setResetLoading(true)
                await axios.put(baseUrl + "/api/resetPassword", {
                    token: token,
                    userId: userID,
                    password: forgotPassData.password,
                }).then(response => {
                    setResetLoading(false);
                    if (response.data.success) {
                        navigate("/dashboard")
                        error.popUp = response.data.message;
                    }
                    else {
                        error.popUp = response.data.message
                    }
                    setErrors(error)
                })
            }
        }
    }

    return (
        <>

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
                        <Button onClick={handleClick} disabled={resetLoading ? "disabled" : ""} text={resetLoading ? <Loader /> : "Send"} />
                        <div className="otp-backLink-box">
                            <img src={backIcon} alt="" onClick={() => navigate("/")} />
                            <a className='otp-back-link' onClick={() => navigate("/")}>Back to sign up</a>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default SignUp