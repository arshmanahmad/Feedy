import React, { useState } from 'react'
import './HomePage.css'
import SideBar from '../../components/SideBar/SideBar'
import WrapperCard from "../../components/CardLayout/WrapperCard/WrapperCard"
import UserInfoCard from '../../components/CardLayout/UserInfoCard/UserInfoCard'
import group from './assets/icons/Group 1760.png'
import contact from './assets/icons/Group.svg'
import cube from './assets/icons/cube.png'
import currency from './assets/icons/9.png'
import graph from './assets/images/Group 1926@2x.png'
const HomePage = () => {
    return (
        <>
            <div className='homePage_container'>
                <SideBar />
                <WrapperCard>
                    <div className="homepage-nav-bar">

                        <p className='dashboard-home'>Dashboard</p>
                    </div>
                    <div className="col-box">
                        <div className="homepage-box1">
                            <div className="row home-cards-box">
                                <UserInfoCard icon={currency} numbers="28,000.300" label="Total Income" currency="$" />
                                <UserInfoCard icon={group} numbers="254" label="Customers" />
                                <UserInfoCard icon={cube} numbers="30" label="Products" />
                                <UserInfoCard icon={contact} numbers="10" label="Categories" />
                            </div>
                            <div className="home-img-box">
                                <img className='homepage-graph-img' src={graph} alt="" />
                            </div>
                        </div>
                        <div className="homepage-box2">

                        </div>
                    </div>
                </WrapperCard>
            </div>
        </>
    )
}

export default HomePage