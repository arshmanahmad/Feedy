import React, { useRef } from 'react'
import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TableLoader from '../../../../components/TableLoader/TableLoader';
import Table from '../../components/Table/Table';
import { DateFormatForUser } from '../../../../../../utlis/DateFormat';
import MenuBar from '../../../../components/MenuBar/MenuBar';
import "./Home.css"

const Home = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL
    const token = Cookies.get("token");

    const optionDotsRef = useRef();
    const menuRef = useRef();

    const [showMenuBar, setShowMenuBar] = useState(false)
    const [axis, setAxis] = useState({ x: 0, y: 0 });
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const fetchData = async () => {
        setLoading(true)
        await axios.get(baseUrl + "/api/stores", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            setLoading(false)
            setData(response.data.data)
        })
    };

    // const toggleMenu = () => {
    //     setShowMenuBar(!showMenuBar);
    // }

    useEffect(() => {
        fetchData();
    }, [])

    const showCustomDate = (value) => {
        return DateFormatForUser(value)
    }

    const handleClickOptions = (e) => {
        setAxis({
            x: e.clientX,
            y: e.clientY
        });

        optionDotsRef.current = e.target;
    }



    return (
        <>
            <div>
                {loading ? <TableLoader /> : <Table
                    filters="name"
                    array={data}
                    keysToDisplay={["name", "adress", "contactNo", "adminEmail"]}
                    label={["Store Name", "Address", "Phone No", "Store Admin", "Actions"]}
                    extraColumns={[<span onClick={handleClickOptions} className='actionsDots px-3'>⋮</span>]}
                />}
            </div>
            <MenuBar
                invokerRef={optionDotsRef}
                setIsOpen={setShowMenuBar}
                isOpen={showMenuBar}
                axis={axis}
                array={[
                    { label: "Edit Store", onClick: () => { } },
                    { label: "Delete Store", onClick: () => { } },
                    { label: "Deactivate", onClick: () => { } }]}
            />

        </>
    )
}

export default Home
// customBlocks={[
//     {
//         index: 3,
//         component: (value) => {
//             return DateFormatForUser(value)
//         }
//     }
// ]}