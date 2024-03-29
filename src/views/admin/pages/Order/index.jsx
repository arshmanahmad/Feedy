import React from 'react'
import WrapperCard from '../../../../components/CardLayout/WrapperCard/WrapperCard'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'

const Order = () => {
    return (
        <>
            <WrapperCard>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
            </WrapperCard>
        </>
    )
}

export default Order