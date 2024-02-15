import React, { useState } from 'react'
import './SignUpForm.css'
import H1 from "../../../components/H1/H1";
import Input from '../../../components/Input/Input'
import Label from '../../../components/Label/Label';
import Button from '../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import hideIcon from '../../../assets/Icons/icon view password.png'
import visibilityIcon from '../../../assets/Icons/visibility-less-weight.png'
import ErrorPopup from "../../../components/ErrorPopup/ErrorPopup"
import Loader from '../../../components/Loader/Loader';
import axios from 'axios';

const SignUpForm = () => {
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

    const checkValidation = () => {
        let error = {};
        const { name, lastName, email, password, confirmPassword } = formData;
        if (name === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
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
        else if (isChecked === false) {
            error.isAgreed = true;
        }
        setErrors(error)
        return Object.keys(error).length === 0;
    }

    const generateOtp = async () => {
        await axios.get(baseUrl + "/api/generateOTP", {
            email: formData.email,
        }).then(response => {
            console.log(response);
            navigate("/verifyOtp");
        })
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (checkValidation()) {
            setLoading(!loading);
            await axios.post(baseUrl + "/api/singup", {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                password: formData.password,
            }).then(response => {
                console.log(response);
                setLoading(false)
                if (response.data.success === true) {
                    generateOtp()
                }
                if (response.data.success === false) {
                }
            })
        }
    }

    const handleSignIn = () => {
        navigate("/signin")
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
                            <Input label="Password" onChange={handleChange} name="password" icon={isShowPassword2 ? hideIcon : visibilityIcon} id="password" onClick={() => setIsShowPassword2(!isShowPassword2)} type={isShowPassword2 ? "text" : "password"} placeholder="password" />
                            <Input label="Confirm Password" onChange={handleChange} name="confirmPassword" icon={isShowPassword ? visibilityIcon : hideIcon} onClick={() => setIsShowPassword(!isShowPassword)} type={isShowPassword ? "text" : "password"} placeholder="confirm password" />
                        </div>
                        <ErrorPopup value={errors} />
                        <div className="signUp-label-box" onClick={() => setIsChecked(!isChecked)} >
                            <Input type="checkBox" name="isChecked" checked={isChecked} /><Label text="I accept the   " className='SignUp-label1' changeColoredText="  Terms and Conditions" />
                        </div>
                        <Button onClick={handleClick} text={loading ? <Loader /> : "Sign Up"} />
                    </form>
                    <Label onClick={handleSignIn} className='SignUp-label2' text=" Already have an account?" color="blue" changeColoredText="Sign in" />
                </div>
            </div>
        </>
    )
}

export default SignUpForm