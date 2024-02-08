import React from 'react'
import './WrapperCard.css'

const WrapperCard = ({ children, className = "" }) => {
    return (
        <>
            <div className={`${className} card_layout`}>{children}</div>
        </>
    )
}

export default WrapperCard