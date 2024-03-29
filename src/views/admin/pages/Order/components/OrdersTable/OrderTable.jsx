import React from 'react'
import './OrderTable.css'
const OrderTable = ({ tableHeads, array, keysToDisplay }) => {
    return (
        <>
            <table className='order_table'>
                <thead>{tableHeads.map((item) => {
                    return <th>{item}</th>
                })}</thead>
                <tbody>{array.map((items) => {

                    return <tr>{
                        keysToDisplay.map((dataItems) => {
                            return <td>{items[dataItems]}</td>
                        })
                    }
                    </tr>

                })}</tbody>
            </table>
        </>
    )
}

export default OrderTable