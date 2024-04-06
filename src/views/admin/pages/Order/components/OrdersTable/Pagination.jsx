import React, { useEffect, useState } from 'react'
import './OrderTable.css';

const Pagination = ({
    table = [],
    columnsToDisplay,
    columnGroupNumber,
}) => {
    const [value, setValue] = useState(10)
    const [pairNumbers, setPairNumbers] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [group, setGroup] = useState(2)
    const handleChange = (e) => {
        setValue(e.target.value);
        columnGroupNumber.setColumnGroup(0)
    }

    const getPairs = (totalLengthArray, numberOfColumn) => {
        let pairs = totalLengthArray.length / numberOfColumn;
        let RoundOffPair = Math.ceil(pairs)

        return RoundOffPair
    }

    useEffect(() => {
        const pairs = getPairs(table, value)
        const newPairNumbers = [];
        for (let i = 1; i <= pairs; i++) {
            newPairNumbers.push(i);
        }
        setPairNumbers(newPairNumbers)
        columnsToDisplay.setLength(value)
    }, [value, table])

    const handleGroup = (groupNumber) => {
        columnGroupNumber.setColumnGroup(groupNumber - 1);
    }
    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1)
        handleGroup(group)
        setGroup(group - 1)
    }
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1)
        handleGroup(group)
        setGroup(group + 1)
    }
    const handleClick = (item, index) => {
        setGroup(item)
        handleGroup(item)
        setCurrentPage(index)
        console.log(item);
    }
    return (
        <>
            <div className='order_paginationBox'>
                <select className='pagination_select' value={value} onChange={handleChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
                <div className='pair_numberBox'>
                    <p className='table_arrow' onClick={handlePreviousPage}>{"<"}</p>
                    {pairNumbers.map((item, index) => {
                        let currentPageClass = "pair_numbers"
                        if (index === currentPage) {
                            currentPageClass = "pair_numbers_selected_page"
                        }
                        return <>
                            <span onClick={() => handleClick(item, index)} className={currentPageClass}>{item}</span>
                        </>
                    })}
                    <p className='table_arrow' onClick={handleNextPage}>{">"}</p>
                </div>
            </div>
        </>
    )
}

export default Pagination