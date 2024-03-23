import React, { useState } from "react";
import { createContext } from "react";
const AppContext = createContext()
const AppData = ({ children }) => {
    const [showMap, setShowMap] = useState(false)
    return (
        <AppContext.Provider value={{ showMap, setShowMap }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppData;
export { AppContext }