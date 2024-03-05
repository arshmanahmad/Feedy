import React, { useState } from 'react'
import WrapperCard from '../../../../components/CardLayout/WrapperCard/WrapperCard'
import Table from './components/Table/Table'
const Store = () => {
    const [data, setData] = useState([
        { name: "Arshman", skill: "React-developer" },
        { name: "Shuja", skill: "React-developer" },
        { name: "Ali", skill: "React-developer" },
    ])
    return (
        <>
            <WrapperCard>
                <div>

                </div>
                <div className="Store_table">
                    <Table array={data} />
                </div>
            </WrapperCard>
        </>
    )
}

export default Store