import React from 'react'
import './OrderTable.css'
const OrderTable = ({ tableHeads, array, keysToDisplay, modifiedColumn, ConditionalModifiedColumn }) => {
    return (
        <>

            <div className="store_tableContainer">
                <table className='order_table'>
                    <thead className='order_thead'>{tableHeads.map((item) => {
                        return <th className='order_th'>{item}</th>
                    })}</thead>
                    <tbody>{array.map((items) => {

                        return <tr>{
                            keysToDisplay.map((dataItems) => {
                                const conditions = ConditionalModifiedColumn || {};
                                const content = conditions[dataItems] ? conditions[dataItems](items[dataItems]) : items[dataItems]
                                return <td className='order_data'>{content}</td>
                            })
                        }
                        </tr>

                    })}</tbody>
                </table>
            </div>
        </>
    )
}

export default OrderTable