import React, { useEffect, useState } from 'react'
import './OrderTable.css';

const Pagination = ({
    table = [],
    columnsToDisplay,
    columnGroupNumber,
}) => {
    const [value, setValue] = useState(10)
    const [pairNumbers, setPairNumbers] = useState([])
    const handleChange = (e) => {
        setValue(e.target.value);
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
        columnGroupNumber.setColumnGroup(groupNumber);
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
                    {pairNumbers.map((item) => {
                        return <span onClick={() => handleGroup(item)} className='pair_numbers'>{item}</span>
                    })}
                </div>
            </div>
        </>
    )
}

export default Pagination