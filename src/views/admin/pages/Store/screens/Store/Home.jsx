import React from 'react'
import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TableLoader from '../../../../components/TableLoader/TableLoader';
import Table from '../../components/Table/Table';
import { DateFormatForUser } from '../../../../../../utlis/DateFormat';

const Home = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = Cookies.get("token");
    console.log(token);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const fetchData = async () => {
        setLoading(true)
        await axios.get(baseUrl + "/api/allOrders", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setLoading(false)
            setData(response.data.data)
        })
    };
    useEffect(() => {
        fetchData();
    }, [])
    console.log(data);

    const showCustomDate = (value) => {
        return DateFormatForUser(value)
    }

    return (
        <>
            <div>
                {loading ? <TableLoader /> : <Table
                    filters="userName"
                    array={data}
                    keysToDisplay={["userName", "id", "phoneNumber", "dateOfDelivery"]}
                    label={["Name", "Identification", "Phone No", "Date of Delivery"]}
                    customBlocks={[
                        {
                            index: 3,
                            component: (value) => {
                                return DateFormatForUser(value)
                            }
                        }
                    ]}
                />}
            </div>
        </>
    )
}

export default Home