import React from 'react'
import './Table.css';
import StatusButton from '../../../../components/StatusButton/StatusButton';

const Table = ({ array }) => {

    return (
        <>
            <table className='store_table'>
                <thead>
                    {array.map((obj, index) => {
                        if (index === 0) {
                            return Object.keys(obj).map((key) => (
                                <td>{key}</td>
                            ))
                        }
                    })}
                </thead>
                <tbody>
                    {array.map((obj) => {
                        return (
                            <tr>
                                {Object.values(obj).map((value, index) => {
                                    return <td key={index}>{value}</td>
                                })}
                                <br />
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}

export default Table