import React, { useState } from "react";
import { createContext } from "react";
import home from '../SideBar/assets/logo/Home.png'
import store from '../SideBar/assets/logo/Stores.png'
import order from '../SideBar/assets/logo/Orders.png'
import product from '../SideBar/assets/logo/Products.png'
import users from '../SideBar/assets/logo/icons8_user_account 1.png'
import Categories from '../SideBar/assets/logo/icons8_sorting 1.png'
import setting from "../SideBar/assets/logo/Frame 997.png"
const Context = createContext()
const Provider = ({ children }) => {
    const [sidebarButtons, setSidebarButton] = useState([
        { img: home, buttonText: "Home" },
        { img: store, buttonText: "Stores" },
        { img: order, buttonText: "Order" },
        { img: Categories, buttonText: "Categories" },
        { img: product, buttonText: "Products" },
        { img: users, buttonText: "Users" },
        { img: setting, buttonText: "Settings" },
    ])

    return (
        <Context.Provider value={{ sidebarButtons, setSidebarButton }}>
            {children}
        </Context.Provider>
    )
}
export default Context;
export { Provider }