import React from 'react'
import './StatusButton.css'

const StatusButton = ({ status, className = "" }) => {
    const complete = "complete-btn"
    let pending = status === "Pending" ? `${complete}--${status} ` : ""
    return (
        <>
            <button className={`${className} ${complete} ${pending}`}>
                {status}
            </button>
        </>
    )
}

export default StatusButton