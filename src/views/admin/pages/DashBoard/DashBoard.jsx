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
import orangeEllipse from './assets/images/Ellipse 177.png'
import blueEllipse from './assets/images/Ellipse 178.png'
import TableSearchBar from '../../components/TableSearchBar/TableSearchBar'
import ProfileBar from '../../components/ProfileBar/ProfileBar'
import ProfilePic from '../../assets/images/Ellipse 1.png'
const DashBoard = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    return (
        <>
            <div className='dashBoard_container'>
                <WrapperCard>
                    <div className="dashBoard-sideBar">
                        <p className='dashboard-home'>Dashboard</p>
                        <div className="dashBoard_searchProfileBox">
                            <div className="dashBoard_searchBox">
                                <TableSearchBar />
                            </div>
                            <ProfileBar img={ProfilePic} name="Arshman Ahmad" editText="Edit Profile" />
                        </div>
                    </div>
                    <div className="col-box">
                        <div className="dashBoard-box1">
                            <div className="row dashBoard-cards-box">
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
                                        <p className='bigCard_headings-p1'>Monthly Profit</p>
                                        <p className='bigCard_headings-p2'>Total profit growth of 25%</p>
                                    </div>
                                    <div className='bigCard_headings-menu'>...</div>
                                </div>
                                <div className="bigCard_graph">
                                    <img className='ellipse-1' src={blueEllipse} alt="" />
                                    <div className="ellipse-para">
                                        <p className='bigCard_headings-p2 p'>Total profit</p>
                                        <p className='bigCard_headings-p1 p'>$ 200.000</p>
                                    </div>
                                    <img src={orangeEllipse} alt="" />
                                </div>
                                <div className="dashBoard_label">
                                    <span className='dasBoard_dot1'>•</span><p>Total income</p><span className='dasBoard_dot2'>•</span><p>Total spending</p>
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