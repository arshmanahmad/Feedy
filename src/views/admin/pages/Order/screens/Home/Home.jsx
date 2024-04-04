import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import ProfileBar from '../../../../components/ProfileBar/ProfileBar'
import profilePic from '../../../../assets/images/Ellipse 1.png'
import OrderTable from '../../components/OrdersTable/OrderTable'
import StatusButton from '../../../../components/StatusButton/StatusButton'
import axios from 'axios'
import Cookies from 'js-cookie'
import MenuBar from '../../components/MenuBar/MenuBar'
import customerInfo from '../../../../../../JSON/customer_info.json';
const Home = () => {
    const [getData, setGetData] = useState(false)
    const [consoleData, setConsoleData] = useState("")
    const [showMenuBar, setShowMenuBar] = useState(false)
    const [data, setData] = useState([]);
    const [axis, setAxis] = useState({ x: 0, y: 0 })
    let optionDotsReff = useRef();
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = Cookies.get("token");
    const getAllOrders = async () => {
        await axios.get(baseUrl + "/api/allOrders", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setData(response.data.data)
            setGetData(true)
        })
    }
    useEffect(() => {
        getAllOrders()
    }, [])
    const handleShowMenuBar = (e) => {
        setConsoleData(e.clientX)
        setAxis({
            x: e.clientX,
            y: e.clientY
        })
        optionDotsReff.current = e.target;
    }


    return (
        <>
            <div className="order_homeContainer">
                <div className="order_profileContainer">
                    <div className='order_headingText'>Order</div>
                    <div className="order_profileBar">
                        <ProfileBar img={profilePic} name="Arshman Ahmad" />
                    </div>
                </div>
                <div className="order_TableContainer">
                    <OrderTable
                        externalData={[<span className='orderTable_threeDotsBarContainer'><span className='orderTable_threeDotsBar' onClick={handleShowMenuBar}>⋮</span></span>]}
                        filters="customer_name"
                        array={customerInfo}
                        tableHeads={["Order ID", "Customer Name", "Item Name", "Price", "Delivery Date", ""]}
                        keysToDisplay={["order_id", "customer_name", "item_name", "unit_price", "delivery_date"]}
                    />
                    {/* {getData && <OrderTable
                        tableHeads={["Order ID", "Phone No", "All Dates", "Delivery Dates", "Amount", "Status", ""]}
                        array={data}
                        keysToDisplay={["id", "phoneNumber", "createdAt", "dateOfDelivery", "totalPrice", "status"]}
                        ConditionalModifiedColumn={[
                            {
                                index: 5,
                                component: (value) => {
                                    if (value === "Pending") {
                                        return <StatusButton status="Pending" />
                                    }
                                    if (value === "Cancel") {
                                        return <StatusButton status="Cancel" />
                                    }
                                    if (value === "Completed") {
                                        return <StatusButton status="Completed" />
                                    }
                                    if (typeof (value) === "number") {
                                        return value.toFixed(2)
                                    }
                                }
                            }
                        ]}
                        externalData={[<span className='orderTable_menuBar' onClick={handleClick}>⋮</span>]}
                    />} */}
                    {<MenuBar
                        array={[
                            { label: "Edit Order", onClick: () => { } },
                            { label: "View Order", onClick: () => { } },
                            { label: "Accept Order", onClick: () => { } },
                            { label: "Reject Order", onClick: () => { } },
                        ]
                        }
                        invokerReff={optionDotsReff}
                        axis={axis}
                        isOpen={showMenuBar}
                        setIsOpen={setShowMenuBar}
                    />}
                </div>
            </div>
        </>
    )
}

export default Home