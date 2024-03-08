import React, { useEffect, useState } from 'react'
import WrapperCard from '../../../../components/CardLayout/WrapperCard/WrapperCard'
import Table from './components/Table/Table'
import MenuBar from '../../components/MenuBar/MenuBar'
import Cookies from 'js-cookie'
import TableSearchBar from '../../components/TableSearchBar/TableSearchBar'
import axios from 'axios'
const Store = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = Cookies.get("token");
    console.log(token);
    const [popUp, setPopUp] = useState([])
    const menus = ["Edit Store", "Delete Store", "Deactivate"]
    const [data, setData] = useState([]);
    const [dummyData, setDummyData] = useState([
        { name: "arshman", class: "one", skill: "web" },
        { name: "Hanan", class: "one", skill: "web" },
        { name: "Shuja", class: "one", skill: "web" },
        { name: "Afnan", class: "one", skill: "web" },
    ])
    const label = ["name", "class"];
    const fetchData = async () => {
        await axios.get(baseUrl + "/api/allOrders", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
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
                <div>

                </div>
                <div className="Store_table">
                    <Table array={dummyData} />
                    <MenuBar onClick={handleClick} array={menus} />
                    {popUp}
                </div>
            </WrapperCard >
        </>
    )
}

export default Store