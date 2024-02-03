import React from 'react'
import './SignUp.css'
import H1 from "../../components/H1/H1";
import Input from '../../components/Input/Input'
import Label from '../../components/Label/Label';
import Button from '../../components/Button/Button';

const SignUp = () => {
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
                                    <Input label="Name" type='text' placeholder="Tony Nyugen" />
                                    <Input label="Last Name" type='text' placeholder="Moon Theme" />
                                    <Input label="Your Email" type='email' placeholder="Tonynguyen@example.com" />
                                    <Input label="Password" type='password' placeholder="******" />
                                </div>
                                <div className="signUp-label-box">
                                    <Input type="checkBox" /><Label text="I accept the " className='SignUp-label1' changeColoredText="Terms and Conditions" />
                                </div>
                                <Button text="Sign in" />
                            </form>
                            <Label className='SignUp-label2' text="Already have an account?" color="blue" changeColoredText="Sign in" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp