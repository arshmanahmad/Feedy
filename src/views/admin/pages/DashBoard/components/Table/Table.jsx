import React, { useEffect, useState } from 'react'
import StatusButton from '../../../../components/StatusButton/StatusButton';
import './Table.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import TableLoader from '../../../../components/TableLoader/TableLoader';
const Table = () => {
    const [loading, setLoading] = useState(false)
    const token = Cookies.get("token")
    const baseUrl = process.env.REACT_APP_BASE_URL
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            await axios.get(baseUrl + "/api/lastOrders", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(response => {
                console.log(response)
                setLoading(false)
                setTableData(response.data.data)
            })
        };
        fetchData();
    }, [])
    console.log(tableData);
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
                    {loading ? <TableLoader className='loading_alignment' /> : <tbody className='dashBoard_tableBody'>
                        {tableData.map((item) => {
                            let date = new Date(item.createdAt);
                            let day = date.getDate().toString().padStart(2, '0');
                            let month = (date.getMonth() + 1).toString().padStart(2, '0');
                            const year = date.getFullYear();
                            const formattedDate = `${day}-${month}-${year}`
                            let statusBtn = item.status === "Pending" ? <StatusButton status="Pending" /> : <StatusButton status="Complete" />
                            const roundOffAmount = item.totalPrice.toFixed(2)
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.paymentMethod}</td>
                                    <td>{formattedDate}</td>
                                    <td>{statusBtn}</td>
                                    <td className='dashBoard_table-price' >{`${"$"} ${roundOffAmount}`}</td>
                                </tr>
                            )
                        })}
                    </tbody>}
                </table>
            </div>
        </>
    )
}

export default Table