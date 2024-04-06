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
    const [activeArrow, setActiveArrow] = useState("active_arrow")
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
        setCurrentPage(0)

    }, [value, table])
    useEffect(() => {
    }, [])
    console.log(currentPage, pairNumbers.length - 1);
    const handleGroup = (groupNumber) => {
        columnGroupNumber.setColumnGroup(groupNumber - 1);
    }
    const modifier = (number) => {
        number = number + 2;
        handleGroup(number)
    }

    const handlePreviousPage = (e) => {
        if (currentPage >= 1) {
            setCurrentPage(currentPage - 1)
            handleGroup(currentPage)
        }
        if (currentPage === pairNumbers.length - 2) {
            setActiveArrow("table_arrow")

        }

    }
    const handleNextPage = (e) => {
        if (currentPage < pairNumbers.length - 1) {
            setCurrentPage(currentPage + 1)
            modifier(currentPage)

        }
        if (currentPage === pairNumbers.length - 2) {
            setActiveArrow("table_arrow")
        }
        else {
            setActiveArrow("active_arrow")
        }

    }

    const handleClick = (item, index, length) => {
        console.log(item);
        setGroup(item)
        handleGroup(item)
        setCurrentPage(index)
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
                    <p className={activeArrow} onClick={(e) => handleNextPage(e)}>{">"}</p>
                </div>
            </div>
        </>
    )
}

export default Pagination