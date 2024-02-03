import React from 'react'
import './H1.css';

const H1 = ({ value }) => {
    return (
        <>
            <h1 className='account-heading'>{value}</h1>
        </>
    )
}

export default H1