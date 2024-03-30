import React from 'react'
import './StatusButton.css'

const StatusButton = ({ status, className = "" }) => {
    const complete = "complete-btn"
    let pending = status ? `${complete}--${status} ` : ""
    return (
        <>
            <button className={`${className} ${complete} ${pending}`}>
                {status}
            </button>
        </>
    )
}

export default StatusButton