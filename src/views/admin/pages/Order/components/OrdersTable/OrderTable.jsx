import React, { useEffect, useState } from 'react'
import './OrderTable.css'
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar'
import DropDown from '../../../../../../components/DropDown/DropDown'
import Pagination from './Pagination'
const OrderTable = ({ tableHeads, externalData, array = [], keysToDisplay = [], modifiedColumn, ConditionalModifiedColumn }) => {
    const [length, setLength] = useState(10)
    const [columnGroup, setColumnGroup] = useState(0);
    const [recordsPerPage, setRecordsPerPage] = useState([]);

    console.log(length);
    const handleFilterObjects = (e) => {
    }

    useEffect(() => {
        const startIndex = columnGroup * length;
        const endIndex = startIndex + length;
        setRecordsPerPage(array.slice(startIndex, endIndex))
    }, [length, columnGroup])


    //////////wpw
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
                        {recordsPerPage.map((items, index) => {
                            if (index < length) {
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
                    <Pagination columnGroupNumber={{ columnGroup, setColumnGroup }} table={array} columnsToDisplay={{ length, setLength }} />
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