import React from 'react'
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage'
import WrapperCard from '../../../../components/CardLayout/WrapperCard/WrapperCard'
import EditCategoryPage from './pages/EditCategoryPAge/EditCategoryPage'

const Categories = () => {
    return (
        <>
            <WrapperCard>
                <div>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path='/editCategory' element={<EditCategoryPage />} />
                    </Routes>
                </div>
            </WrapperCard>
        </>
    )
}

export default Categories