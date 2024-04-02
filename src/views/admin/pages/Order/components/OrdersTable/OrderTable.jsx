import React, { useEffect, useState } from 'react'
import './OrderTable.css'
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar'
import DropDown from '../../../../../../components/DropDown/DropDown'
import Pagination from './Pagination'
const OrderTable = ({ tableHeads, lengthOfTable, externalData, array = [], keysToDisplay = [], modifiedColumn, ConditionalModifiedColumn }) => {

    const handleFilterObjects = (e) => {

    }
    const [noOfRecordsPerPage, setNoOfRecordsPerPage] = useState(30);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState([]);


    useEffect(() => {
        const startIndex = (currentPage - 1) * noOfRecordsPerPage;
        const endIndex = startIndex + noOfRecordsPerPage;

        setRecordsPerPage(array.slice(startIndex, endIndex));
    }, [array, noOfRecordsPerPage, currentPage])

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



                        })}</tbody>
                </table>
                <div className="order_paginationBox">
                    <Pagination
                        noOfRecordsPerPage={noOfRecordsPerPage}
                        setNoOfRecordsPerPage={setNoOfRecordsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        noOfTotalRecords={array.length}
                    />
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