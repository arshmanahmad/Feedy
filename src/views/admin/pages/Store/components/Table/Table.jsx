import React, { useState } from 'react'
import './Table.css';
import StatusButton from '../../../../components/StatusButton/StatusButton';
import TableSearchBar from '../../../../components/TableSearchBar/TableSearchBar';

const Table = ({ array = [] }) => {
    const [searchedData, setSearchedData] = useState('')

    return (
        <>
            <TableSearchBar onChange={(e) => setSearchedData(e.target.value)} />
            <table className='store_table'>
                <thead>
                    {array.length > 0 && array.map((obj, index) => {
                        if (index === 0) {
                            return Object.keys(obj).map((key) => (
                                <td>{key}</td>
                            ))
                        }
                    })}
                </thead>
                <tbody>
                    {
                        array.length > 0 && array.filter((record) => {
                            return searchedData.toLowerCase() === " " ?
                                record :
                                record.name.toLowerCase().includes(searchedData)
                        }).map((item) => {
                            return (
                                <tr>
                                    {Object.values(item).map((dataItem) => {
                                        return <td>{dataItem}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                    {/* .map((obj) => {
                            return (
                                <tr>
                                    {Object.values(obj).map((value, index) => {
                                        return <td key={index}>{value}</td>
                                    })}
                                    <br />
                                </tr>
                            )
                        }) */}
                </tbody>
            </table>
        </>
    )
}

export default Table