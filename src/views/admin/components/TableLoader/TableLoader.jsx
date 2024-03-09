import React from 'react'
import './TableLoader.css';

const TableLoader = ({ className = "" }) => {
    const primaryClass = "tableLoader_box"
    return (
        <>
            <div className={`${className} ${primaryClass} ${className}`}>
                <span class="table_loader"></span>
            </div>
        </>
    )
}

export default TableLoader