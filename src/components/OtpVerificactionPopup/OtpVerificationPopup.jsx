import React from 'react'
import './OtpVerificationPopup.css';
import redCircle from '../../assets/Images/Rectangle 933.png'
import greenCircle from '../../assets/Images/Group 2467.png'
import whiteTick from '../../assets/Images/Vector (2).png';
import whiteCross from '../../assets/Images/Vector (3).png';
import blackCross from '../../assets/Images/Vector (4).png';

const OtpVerificationPopup = ({ type = "" }) => {
    let defaultClass = `${"otp_popUp"} ${type}`
    const handleClick = () => {
        document.getElementById("otp_box").style.display = "none";
    }

    return (
        <>
            <div id='otp_box' className={`${defaultClass}`}>
                <div>
                    <div className="otp_statusBox">
                        <div className="otp_status">
                            {type === "" ? <img className='otp_circle' src={greenCircle} /> : <img className='otp_circle' src={redCircle} />}
                            {type === "" ? <img className='otp_verifier' src={whiteTick} /> : <img className='otp_verifier' src={whiteCross} />}
                        </div>
                        {type === "" ? <p>OTP Verified</p> : <p>Invalid OTP</p>}
                    </div>
                    <img className='otp_closeIcon' src={blackCross} alt="" onClick={handleClick} />
                </div>
            </div>
        </>
    )
}

export default OtpVerificationPopup