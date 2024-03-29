import React, { useEffect, useState } from 'react'
import './Home.css'
import ProfileBar from '../../../../components/ProfileBar/ProfileBar'
import profilePic from '../../../../assets/images/Ellipse 1.png'
import OrderTable from '../../components/OrdersTable/OrderTable'
import StatusButton from '../../../../components/StatusButton/StatusButton'
import axios from 'axios'
import Cookies from 'js-cookie'
const Home = () => {
    const [data, setData] = useState('');
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = Cookies.get("token");
    const getAllOrders = async () => {
        await axios.get(baseUrl + "/api/allOrders", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setData(response.data.data)
        })
    }
    useEffect(() => {
        getAllOrders()
    }, [])
    console.log(data);
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
                        tableHeads={["Order ID", "Phone No", "All Dates", "Delivery Dates", "Amount", "Status"]}
                        array={data}
                        keysToDisplay={["id", "phoneNumber", "createdAt", "dateOfDelivery", "totalPrice", "status"]}
                        ConditionalModifiedColumn={
                            () => {
                                return {
                                    status: (value) => {
                                        if (value = "Completed") {
                                            return <StatusButton status="Completed" />
                                        }
                                        if (value = "Cancel") {
                                            return <StatusButton status="Cancel" />
                                        }
                                        if (value = "Processing") {
                                            return <StatusButton status="Processing" />
                                        }
                                    }
                                }
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default Home