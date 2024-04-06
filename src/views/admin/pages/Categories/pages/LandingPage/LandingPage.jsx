import React from 'react'
import "./LandingPage.css"
import Button from '../../../../../../components/Button/Button'
import ProfileBar from '../../../../components/ProfileBar/ProfileBar'
import ProfilePic from '../../../../../admin/assets/images/Ellipse 1.png'
import OrderTable from '../../../Order/components/OrdersTable/OrderTable'
import categoriesData from '../../json/categories_data.json'
import StoreTable from '../../../Store/components/Table/Table'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/admin/categories/editCategory")

    }
    return (
        <>
            <div className="categories_mainBox">
                <div className="categories_firstRow">
                    <div className="categories_headingBtnBox">
                        <div className='categories_headingText'>Categories</div><Button onClick={handleClick} text="+ Add Category" type="action" />
                    </div>
                    <ProfileBar img={ProfilePic} name="Arshman Ahmed" editText="Edit Profile" />
                </div>
                <div className='categories_straightLine'></div>
                <div className="categories_secondRow">
                    <StoreTable
                        label={["Category", "Created At", "Updated At", "Parent ID"]}
                        array={categoriesData}
                        keysToDisplay={["category_id", "creation_date", "modification_date", "parent_id"]}
                    />
                </div>
            </div>
        </>
    )
}

export default LandingPage