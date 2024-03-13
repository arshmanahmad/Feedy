import React, { useEffect, useState } from 'react'
import './Table.css';
import StatusButton from '../../../../components/StatusButton/StatusButton';
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar';

const Table = ({ array = [], label = [], keysToDisplay = [], filters, customBlocks = [] }) => {
    const [searchedData, setSearchedData] = useState('');
    const [filteredData, setFilteredData] = useState(array);

    useEffect(() => {
        setFilteredData(array.filter((obj) => {
            return searchedData === '' || obj[filters].toLowerCase().includes(searchedData.toLowerCase());
        }))
    }, [searchedData])

    return (
        <>
            <div className='table_container'>
                <TableSearchBar onChange={(e) => setSearchedData(e.target.value)} />
                <table className='store_table'>
                    <thead>
                        {label.map((text, index) => {
                            return <th className='table_thead'>{text}</th>
                        })}
                    </thead>
                    <tbody>
                        {
                            filteredData.map((obj) => {
                                return (
                                    <tr>
                                        {
                                            keysToDisplay.map((key, index) => {
                                                return (
                                                    <td className='table_data'>
                                                        {obj[key]}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            {/* {customBlocks.length > 0 ? (
                customBlocks[0].index === index ?
                    customBlocks[0].component(obj[key]) :
                    obj[key]
            ) : obj[key]} */}
        </>
    )
}

export default Table