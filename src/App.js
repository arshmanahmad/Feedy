import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingWrapper from './components/LandingWrapper/LandingWrapper'
import HomePage from './pages/HomePage/HomePage'
import ResetPassword from "./views/SignIn/ResetPassword/ResetPassword"
const App = () => {
  return (
    <>
      <div>
        {/* <div>SignIn/resetPassword/:userId/:token */}
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<LandingWrapper />} />
            {/* <Route path="/" element={<ResetPassword />} /> */}
            {/* <Route path="/otp" element={<OtpVerification />} /> */}
            <Route path="/dashboard/*" element={<HomePage />} />
            {/* <Route path="/" element={<SignIn />} /> */}
            {/* <Route path="/SignIn/ForgotPassword" element={<ForgotPassword />} /> */}
          </Routes>
        </BrowserRouter>
      </div >
    </>
  )
}
export default App