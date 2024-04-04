import React, { useEffect, useState } from 'react'
import './Home.css'
import ProfileBar from '../../../../components/ProfileBar/ProfileBar'
import profilePic from '../../../../assets/images/Ellipse 1.png'
import OrderTable from '../../components/OrdersTable/OrderTable'
import StatusButton from '../../../../components/StatusButton/StatusButton'
import axios from 'axios'
import Cookies from 'js-cookie'
import customerInfo from '../../../../../../JSON/customer_info.json';
const Home = () => {
    const [getData, setGetData] = useState(false)
    const [consoleData, setConsoleData] = useState("")
    const [data, setData] = useState([]);
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
    const handleClick = (e) => {
        setConsoleData(e.
            clientX)

    }
    console.log(customerInfo);

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
                        filters="customer_name"
                        array={customerInfo}
                        tableHeads={["Order ID", "Customer Name", "Item Name", "Price", "Delivery Date"]}
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
                </div>
            </div>
        </>
    )
}

export default Home