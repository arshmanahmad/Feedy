import React, { useContext, useEffect, useState } from 'react'
import './SignUpForm.css'
import H1 from "../../../components/H1/H1";
import Input from '../../../components/Input/Input'
import Label from '../../../components/InfoText/InfoText';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../../assets/Icons/icon view password.png'
import visibilityIcon from '../../../assets/Icons/visibility-less-weight.png'
import ErrorPopup from "../../../components/ErrorPopup/ErrorPopup"
import Loader from '../../../components/Loader/Loader';
import IntroForm from '../../../components/IntroModel/IntroModel';
import axios from 'axios';
import IntroModel from '../../../components/IntroModel/IntroModel';
import AppData, { AppContext } from '../../../components/Context/AppData';

const SignUpForm = () => {
    const { intro, setIntro } = useContext(AppContext)
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setFormData({
            ...formData,
            [event.target.name]: value
        })
    }
    const { email, password } = formData;
    const credentials = {
        email,
        password
    }
    const checkValidation = () => {
        let error = {};
        const { name, lastName, email, password, confirmPassword, phoneNumber } = formData;
        if (name === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || phoneNumber === "") {
            error.fillAllFields = true;
        }
        else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
            error.invalidEmail = true;
        }
        else if (password.length < 7) {
            error.passLength = true;
        }
        else if (password !== confirmPassword) {
            error.passNotMatch = true;
        }
        else if (phoneNumber.length !== 11) {
            error.numLength = true;
        }
        else if (isChecked === false) {
            error.isAgreed = true;
        }
        setErrors(error)
        return Object.keys(error).length === 0;
    }

    useEffect(() => {
        setIntro(true)
        const timer = setTimeout(() => {
            setIntro(false)
        }, 3000);
        return () => clearTimeout(timer)
    }, [])
    const handleClick = async (e) => {
        e.preventDefault();
        if (checkValidation()) {
            setLoading(true);
            const error = {};
            await axios.post(baseUrl + "/api/singup", {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                password: formData.password,
            }).then(response => {
                setLoading(false)
                if (response.data.success === true) {
                    localStorage.setItem("credentials", JSON.stringify(credentials))
                    navigate("/verifyOtp");
                }
                if (response.data.success === false) {
                    error.popUp = response.data.message
                }
                setErrors(error)
            })
        }
    }

    return (
        <>
            <div className="signUp-content-container flex-box col-sm-6 col-lg-7" >

                <div className='content-container'>
                    <H1 value="Create Your Account" />
                    <form className="signUp-input-container">
                        <div className="row">
                            <Input label="First Name" onChange={handleChange} type='text' name="firstName" placeholder="first name" />
                            <Input label="Last Name" onChange={handleChange} type='text' name="lastName" placeholder="last name" />
                            <Input label="Your Email" onChange={handleChange} type='email' name="email" placeholder="email" />
                            <Input label="Phone Number" onChange={handleChange} name="phoneNumber" type="number" placeholder="phone number" />
                            <Input label="Password" onChange={handleChange} name="password" icon={isShowPassword2 ? visibilityIcon : hideIcon} id="password" onClick={() => setIsShowPassword2(!isShowPassword2)} type={isShowPassword2 ? "text" : "password"} placeholder="password" />
                            <Input label="Confirm Password" onChange={handleChange} name="confirmPassword" icon={isShowPassword ? visibilityIcon : hideIcon} onClick={() => setIsShowPassword(!isShowPassword)} type={isShowPassword ? "text" : "password"} placeholder="confirm password" />
                        </div>
                        <ErrorPopup value={errors} />
                        <div className="signUp-label-box" onClick={() => setIsChecked(!isChecked)} >
                            <Input type="checkBox" name="isChecked" checked={isChecked} /><Label text="I accept the   " className='SignUp-label1' changeColoredText="  Terms and Conditions" />
                        </div>
                        <Button onClick={handleClick} disabled={loading ? "disabled" : ""} text={loading ? <Loader /> : "Sign Up"} />
                    </form>
                    <Label onSecondTextClick={() => navigate("/signin")} className='SignUp-label2' text=" Already have an account?" color="blue" changeColoredText="Sign in" />
                </div>
            </div>
        </>
    )
}

export default SignUpForm