import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import HomePage from './pages/HomePage/HomePage'
import OtpVerification from './pages/OtpVerification/OtpVerification'
import ResetPassword from './pages/ResetPassword/ResetPassword'
const App = () => {
  return (
    <>
      <div>
        {/* http://localhost:3000/SignIn
        /resetPassword/2/e7e165fd0f55
        dbbe5ab9b3ecde71d158 */}
        <BrowserRouter>
          <Routes>
            < Route path="SignIn/resetPassword/:userId/:token" element={<ResetPassword />} />
            < Route path="/" element={<SignUp />} />
            < Route path="/otp" element={<OtpVerification />} />
            < Route path="/HomePage" element={<HomePage />} />
            < Route path="/SignIn" element={<SignIn />} />
            < Route path="/SignIn/ForgotPassword" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App