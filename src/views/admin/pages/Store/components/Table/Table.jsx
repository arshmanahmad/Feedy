import React, { useEffect, useState } from 'react'
import './Table.css';
import StatusButton from '../../../../components/StatusButton/StatusButton';
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar';
import MenuBar from '../../../../components/MenuBar/MenuBar'

const Table = ({ array = [], label = [], keysToDisplay = [], filters, customBlocks = [] }) => {
    const [searchedData, setSearchedData] = useState('');
    const [filteredData, setFilteredData] = useState(array);

    useEffect(() => {
        setFilteredData(array.filter((obj) => {
            return searchedData === '' || obj[filters].toLowerCase().includes(searchedData.toLowerCase());
        }))
    }, [searchedData])
    const handleClick = (obj) => {
        return <MenuBar array={"Edit Store,Delete Store"} />
    }
    return (
        <>
            <div className='table_container'>
                <div className="searchBar_box">
                    <TableSearchBar onChange={(e) => setSearchedData(e.target.value)} />
                </div>
                <table className='store_table'>
                    <thead className='table_head'>
                        {label.map((text, index) => {
                            return <th className='table_th'>{text}</th>
                        })
                        }
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
                                                        {customBlocks.length > 0 ? (
                                                            customBlocks[0].index === index ?
                                                                customBlocks[0].component(obj[key]) :
                                                                obj[key]
                                                        ) : obj[key]}
                                                    </td>
                                                )
                                            })
                                        }
                                        <td className='table_data dotMenu' onClick={() => handleClick(obj)}>⋮</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >
        </>
    )
}
export default Table