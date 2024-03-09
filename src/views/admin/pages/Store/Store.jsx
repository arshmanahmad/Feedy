import React, { useEffect, useState } from 'react'
import './Store.css';
import WrapperCard from '../../../../components/CardLayout/WrapperCard/WrapperCard'
import Table from './components/Table/Table'
import MenuBar from '../../components/MenuBar/MenuBar'
import Cookies from 'js-cookie'
import TableSearchBar from '../../components/TableSearchBar/TableSearchBar'
import Button from '../../../../components/Button/Button';
import axios from 'axios'
import ProfileBar from '../../components/ProfileBar/ProfileBar';
import profilePic from '../../assets/images/Ellipse 1.png'
import TableLoader from '../../components/TableLoader/TableLoader';
const Store = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = Cookies.get("token");
    console.log(token);
    const label = ["Store Name", "Address", "Phone No", "Store Admin"]
    const keysToDisplay = ["Store Name", "Address", "Phone No", "Store Admin"]
    const [popUp, setPopUp] = useState([])
    const [loading, setLoading] = useState(false)
    const menus = ["Edit Store", "Delete Store", "Deactivate"]
    const [data, setData] = useState([]);
    const [dummyData, setDummyData] = useState([
        { name: "arshman", class: "one", skill: "web" },
        { name: "Hanan", class: "one", skill: "web" },
        { name: "Shuja", class: "one", skill: "web" },
        { name: "Afnan", class: "one", skill: "web" },
    ])
    const fetchData = async () => {
        setLoading(true)
        await axios.get(baseUrl + "/api/allOrders", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setLoading(false)
            setData(response.data.data)
        })
    };
    useEffect(() => {
        fetchData();
    }, [])
    console.log(data);

    const handleClick = () => {
        setPopUp("clicked")
    }
    console.log(data);
    return (
        <>
            <WrapperCard>
                <div className="Store_table">
                    <div className="store_heading">
                        <div className="headingPlusBtn_container">
                            <p className='store_headingText'>Stores</p><Button text="Add Store" type="action" />
                        </div>
                        <div className="storeProfile_container">
                            <ProfileBar img={profilePic} name="Shuja loliwala" editText="Edit Profile" />
                        </div>
                    </div>
                    {loading ? <TableLoader /> : <Table array={data} keysToDisplay={keysToDisplay} label={label} />}
                    <MenuBar onClick={handleClick} array={menus} />
                    {popUp}
                </div>
            </WrapperCard >
        </>
    )
}

export default Store