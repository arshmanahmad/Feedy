import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            < Route path="/" element={<SignUp />} />
            < Route path="/HomePage" element={<HomePage />} />
            < Route path="/SignUp/SignIn" element={<SignIn />} />
            < Route path="/SignIn/ForgotPassword" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App