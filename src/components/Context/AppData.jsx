import React, { useState } from "react";
import { createContext } from "react";
const AppContext = createContext()
const AppData = ({ children }) => {
    const [showMap, setShowMap] = useState(false)
    const [otpVerification, setOtpVerification] = useState(-1)
    const [intro, setIntro] = useState(null);
    return (
        <AppContext.Provider value={{ showMap, setShowMap, otpVerification, setOtpVerification, intro, setIntro, }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppData;
export { AppContext }