import React from 'react'
import './OrderTable.css'
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar'
import DropDown from '../../../../../../components/DropDown/DropDown'
const OrderTable = ({ tableHeads, array = [], keysToDisplay = [], modifiedColumn, ConditionalModifiedColumn }) => {
    return (
        <>

            <div className="store_tableContainer">
                <div className="order_firstRow">
                    <div className="selectOption_order">
                        <p className='order_filterHead'>Filter By</p>
                        <p className='order_para'>Date <select className='order_select' name="" id=""></select></p>
                        <p className='order_para'>Order <select className='order_select' name="" id=""></select></p>
                        <p className='order_coloredHeading'>Todays's Order</p>

                    </div>
                    <TableSearchBar />
                </div>
                <table className='order_table'>
                    <thead className='order_thead'>{tableHeads.map((item) => {
                        return <th className='order_th'>{item}</th>
                    })}</thead>
                    <tbody>{array.map((items) => {

                        return <tr>{
                            keysToDisplay.map((dataItems, index) => {
                                return (
                                    <td >
                                        {ConditionalModifiedColumn.length > 0 ?
                                            (ConditionalModifiedColumn[0].index === index ?
                                                ConditionalModifiedColumn[0].component(items[dataItems])
                                                : items[dataItems]) :
                                            items[dataItems]}
                                    </td>
                                );
                            })
                        }
                        </tr>

                    })}</tbody>
                </table>
            </div>
        </>
    )
    {/* {ConditionalModifiedColumn[dataItems]
        ? ConditionalModifiedColumn[dataItems](items[dataItems])
        : items[dataItems]} */}
}

export default OrderTable