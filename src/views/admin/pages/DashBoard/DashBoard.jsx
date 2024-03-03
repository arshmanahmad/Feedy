import React from 'react'
import './DashBoard.css'
import SideBar from '../../../../components/SideBar/SideBar'
import WrapperCard from '../../../../components/CardLayout/WrapperCard/WrapperCard'
import UserInfoCard from '../../../../components/CardLayout/UserInfoCard/UserInfoCard'
import group from './assets/icons/Group 1760.png'
import contact from './assets/icons/Group.svg'
import cube from './assets/icons/cube.png'
import currency from './assets/icons/9.png'
import graph from './assets/images/Group 1926@2x.png'
import Table from './components/Table/Table'
const DashBoard = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    return (
        <>
            <div className='homePage_container'>
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
                            <div className="DashBoard_tableBox">
                                <Table getToken={token} />
                            </div>
                        </div>
                        <div className="homepage-box2">
                            <div className="dashBoard_bigCard">
                                <div className="bigCard_headings">
                                    <div>
                                        <h2>Monthly Profit</h2>
                                        <p>Total profit growth of 25%</p>
                                    </div>
                                    <div>...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </WrapperCard>
            </div>
        </>
    )
}

export default DashBoard