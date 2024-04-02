import React, { useEffect, useState } from 'react'

const Pagination = ({
    noOfTotalRecords = 0,
    noOfRecordsPerPage,
    setNoOfRecordsPerPage,
    setCurrentPage,
    currentPage,
}) => {


    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        const noOfPages = Math.ceil(noOfTotalRecords / noOfRecordsPerPage) || 1;

        const tempPagination = [];
        for (let i = 1; i <= noOfPages; i++) {
            tempPagination.push(i)
        }


        setPagination(tempPagination)
    }, [noOfRecordsPerPage])

    console.log(pagination, noOfRecordsPerPage, noOfTotalRecords);


    return (
        <div className='pagination_box'>
            <select name="" id="" onChange={(e) => setNoOfRecordsPerPage(parseInt(e.target.value))} value={noOfRecordsPerPage}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>


            <div className="paginatio_btns">
                {"<"}
                {pagination.map((item, index) => {
                    return <span onClick={() => {
                        setCurrentPage(item);
                    }} className={`order_paginationNumbers ${currentPage === index + 1 ? "current_page" : ""}`}>{item}</span>
                })}
                {">"}
            </div>
        </div>
    )
}

export default Pagination
