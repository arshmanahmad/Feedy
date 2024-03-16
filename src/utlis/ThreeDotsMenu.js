import React from 'react'
import MenuBar from "../views/admin/components/MenuBar/MenuBar"

const ThreeDotsMenu = ({ value }) => {
    return (
        <>
            {`${value}${"⋮"}`}
        </>
    )
}

export default ThreeDotsMenu