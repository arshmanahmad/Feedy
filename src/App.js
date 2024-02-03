import React from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App