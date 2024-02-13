import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingWrapper from './components/LandingWrapper/LandingWrapper'
const App = () => {
  return (
    <>
      <div>
        {/* http://localhost:3000/SignIn
        /resetPassword/2/e7e165fd0f55
        dbbe5ab9b3ecde71d158 */}
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<LandingWrapper />} />
            {/* <Route path="SignIn/resetPassword/:userId/:token" element={<ResetPassword />} /> */}
            {/* <Route path="/otp" element={<OtpVerification />} /> */}
            {/* <Route path="/HomePage" element={<HomePage />} /> */}
            {/* <Route path="/" element={<SignIn />} /> */}
            {/* <Route path="/SignIn/ForgotPassword" element={<ForgotPassword />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App