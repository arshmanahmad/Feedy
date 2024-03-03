import React, { useEffect, useState } from 'react'
import StatusButton from '../../../../components/StatusButton/StatusButton';
import './Table.css'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Table = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(baseUrl + "/api/lastOrders", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => {
                console.log(response)
                setTableData(response.data)
            })
        };
        fetchData();
    }, [])

    return (
        <>
            <div className='dashBoard_table--outerBox'>
                <div className="dashBoard_table--labels">
                    <p>Last Orders</p>
                    <p className='dashBoard_table--view_btn'>View All</p>
                </div>
                <table className='dashBoard_table'>
                    <thead>
                        <th>ID Order</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Tracking</th>
                        <th>Price</th>
                    </thead>
                    <tbody>
                        {/* {tableData.map((item) => {
                            return (
                                <tr>
                                    <td>{item.IdOrder}</td>
                                    <td>{item.name}</td>
                                    <td>{item.product}</td>
                                    <td>{item.date}</td>
                                    <td>{item.StatusButton}</td>
                                    <td className='dashBoard_table-price'>{item.price}</td>
                                </tr>
                            )
                        })} */}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table