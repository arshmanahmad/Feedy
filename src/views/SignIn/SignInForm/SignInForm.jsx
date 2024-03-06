import React, { useState } from 'react'
import "./SigninForm.css"
import H1 from '../../../components/H1/H1';
import Input from '../../../components/Input/Input'
import InfoText from '../../../components/InfoText/InfoText';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../../assets/Icons/icon view password.png'
import visibilityIcon from "../../../assets/Icons/visibility-less-weight.png"
import ErrorPopup from '../../../components/ErrorPopup/ErrorPopup';
import axios from 'axios';
import Loader from '../../../components/Loader/Loader';

const SignInForm = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    const [passwordType, setPasswordType] = useState("password")
    const [signInLoading, setSignInLoading] = useState(false)
    const [errors, setError] = useState({})
    const [signInForm, setSignInForm] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const value = e.target.value;
        setSignInForm({
            ...signInForm,
            [e.target.name]: value
        }
        )
    }
    const validator = () => {
        let error = {};
        const { email, password } = signInForm;
        if (email === "" || password === "") {
            error.fillAllFields = true
        }
        else if (password.length < 7) {
            error.passLength = true;
        }
        else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            error.invalidEmail = true;
        }
        else if (check === false) {
            error.checked = true;
        }
        setError(error)
        return Object.keys(error).length === 0;
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (validator()) {
            let error = {}
            setSignInLoading(true)
            await axios.post(baseUrl + "/api/signin", {
                email: signInForm.email,
                password: signInForm.password
            }).then(response => {
                setSignInLoading(false)
                console.log(response);
                if (response.data.success === true) {
                    navigate("/admin/home")
                }
                else if (response.data.success === false) {
                    error.popUp = response.data.message;
                }
            })
            setError(error)
        }
    }

    return (
        <>
            <div className="signIn-content-container flex-box col-sm-6 col-lg-7" >
                <div className='signIn-inner-content-container'>
                    <H1 value="Sign In" />
                    <p className='signIn-p'>or sign in using email address</p>
                    <form className="signIn-input-container">
                        <div className="row">
                            <Input label="Your Email" name="email" type='email' onChange={handleChange} placeholder="email" />
                            <Input label="Password" name="password" type={passwordType} onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")} onChange={handleChange} icon={passwordType === "password" ? hideIcon : visibilityIcon} placeholder="password" />
                        </div>
                        <ErrorPopup value={errors} />
                        <div className="signIn-label-box">
                            <Input type="checkBox" onInputClick={() => setCheck(!check)} checked={check} /><InfoText onFirstTextClick={() => setCheck(!check)} onSecondTextClick={() => navigate("/signin/ForgotPassword")} text="Remember me " className='signIn-label1' changeColoredText="Forgot password?" />
                        </div>
                        <Button onClick={handleFormSubmit} disabled={signInLoading ? "disabled" : ""} text={signInLoading ? <Loader /> : "Sign in"} />
                    </form>
                    <InfoText className='SignIn-path-label' text="Want to go back" color="blue" onSecondTextClick={() => navigate("/")} changeColoredText="for Sign Up?" />
                </div>
            </div>
        </>
    )
}

export default SignInForm