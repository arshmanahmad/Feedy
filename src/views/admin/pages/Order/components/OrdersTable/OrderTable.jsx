import React, { useState } from 'react'
import './OrderTable.css'
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar'
import DropDown from '../../../../../../components/DropDown/DropDown'
const OrderTable = ({ tableHeads, lengthOfTable, externalData, array = [], keysToDisplay = [], modifiedColumn, ConditionalModifiedColumn }) => {
    const [pagination, setPagination] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    ])
    const handleFilterObjects = (e) => {

    }

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
                    <TableSearchBar onChange={handleFilterObjects} />
                </div>
                <table className='order_table'>
                    <thead className='order_thead'>{tableHeads.map((item) => {
                        return <th className='order_th'>{item}</th>
                    })}</thead>
                    <tbody>
                        {array.map((items, index) => {
                            if (index < lengthOfTable) {
                                return <tr>{
                                    keysToDisplay.map((dataItems, index) => {
                                        return (
                                            <td >
                                                {items[dataItems]}
                                            </td>
                                        );
                                    })
                                }
                                </tr>

                            }

                        })}</tbody>
                </table>
                <div className="order_paginationBox">
                    {
                        pagination.map((item, index) => {
                            let pairs = array.length / lengthOfTable;
                            let RoundOffPairNumber = Math.floor(pairs)
                            let extractedNumbers = RoundOffPairNumber * lengthOfTable;
                            let remaining = array.length - extractedNumbers
                            let finalPairs;
                            if (remaining > 0) {
                                finalPairs = RoundOffPairNumber + 1;
                            }
                            else {
                                finalPairs = RoundOffPairNumber;
                            }
                            if (index < finalPairs) {
                                return <span className='order_paginationNumbers'>{item}</span>
                            }

                        })
                    }
                </div>
            </div>
        </>
    )
    {/* {ConditionalModifiedColumn[dataItems]
        ? ConditionalModifiedColumn[dataItems](items[dataItems])
    : items[dataItems]} */}
}

export default OrderTable
{/* {ConditionalModifiedColumn.length > 0 ?
    (ConditionalModifiedColumn[0].index === index ?
        ConditionalModifiedColumn[0].component(items[dataItems])
        : items[dataItems]) :
    items[dataItems]} */}
{/* {externalData.map((item) => {
        return <td>{item}</td>
    })} */}