import React from 'react'
import './OrderTable.css'
const OrderTable = ({ tableHeads, array, keysToDisplay }) => {
    return (
        <>
            <table className='order_table'>
                <thead>{tableHeads.map((item) => {
                    return <th>{item}</th>
                })}</thead>
                <tbody><td>asdsad</td></tbody>
            </table>
        </>
    )
}

export default OrderTable