import React from 'react'
import './style.css';
import WrapperCard from '../../../../components/CardLayout/WrapperCard/WrapperCard'
import Button from '../../../../components/Button/Button';
import ProfileBar from '../../components/ProfileBar/ProfileBar';
import profilePic from '../../assets/images/Ellipse 1.png'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Store/Home';
import AddStore from './screens/AddStore/AddStore';
import { useNavigate } from 'react-router-dom';
const Store = () => {
    const navigate = useNavigate('')
    const handleClick = () => {
        navigate("/admin/stores/AddStore")
    }
    return (
        <>
            <WrapperCard>
                <div className="Store_table">
                    <div className="store_heading">
                        <div className="headingPlusBtn_container">
                            <p className='store_headingText'>Stores</p><Button onClick={handleClick} text="Add Store" type="action" />
                        </div>
                        <div className="storeProfile_container">
                            <ProfileBar img={profilePic} name="Shuja Uddin" editText="Edit Profile" />
                        </div>
                    </div>
                    <div className="store_contentContainer">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/AddStore" element={<AddStore />} />
                        </Routes>
                    </div>
                </div>
            </WrapperCard >
        </>
    )
}

export default Store