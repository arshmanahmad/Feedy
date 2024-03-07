import React from 'react'
import "./TableSearchBar.css"

const TableSearchBar = ({ onChange }) => {
    return (
        <>
            <div className='table_searchBar'>
                <span class="material-symbols-outlined">
                    search
                </span>
                <input onChange={onChange} placeholder='Search something' type="text" className='searchBar_input' />
            </div>
        </>
    )
}

export default TableSearchBar