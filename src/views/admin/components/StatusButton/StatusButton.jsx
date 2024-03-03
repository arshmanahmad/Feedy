import React from 'react'
import './StatusButton.css'

const StatusButton = ({ status, className = "" }) => {
    const complete = "complete-btn"
    const pending = status === "pending" ? `${complete}--${status} ` : ""
    return (
        <>
            <button className={`${className} ${complete} ${pending}`}>
                {status}
            </button>
        </>
    )
}

export default StatusButton