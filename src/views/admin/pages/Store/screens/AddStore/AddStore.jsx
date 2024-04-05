import React, { useContext, useEffect, useState } from 'react'
import './AddStore.css'
import Input from '../../../../../../components/Input/Input'
import mapIcon from "../../assets/icons/Vector (1).png"
import DayCheckBox from '../../components/DayCheckBox/DayCheckBox'
import Button from '../../../../../../components/Button/Button'
import clockIcon from '../../assets/icons/icons8_clock 2.png'
import { AppContext } from "../../../../../../components/Context/AppData"
import AddFilePic from '../../assets/images/Group 2109 (1).png'
import axios from 'axios'
const AddStore = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { showMap, setShowMap } = useContext(AppContext)
    const [extractedFile, setExtractedFile] = useState(null)
    const [extractedFilePopup, setExtractedFilePopup] = useState(false)
    const [data, setData] = useState({
        storeName: "",
        phoneNumber: "",
        storeAddress: "",
        zipCode: "",
        location: "",
        storeDaysStartTime: "",
        storeDaysCloseTime: "",
        pickupDaysStartTime: "",
        pickupDaysClosingTime: "",
        deliveryDaysStartingTime: "",
        deliveryDaysClosingTime: "",
        storeMonday: "",
        storeTuesday: "",
        storeWednesday: "",
        storeThursday: "",
        storeFriday: "",
        storeSaturday: "",
        storeSunday: "",
    })
    const handleGetFile = (e) => {
        const file = e.target.files;
        setExtractedFile(file)
        setExtractedFilePopup(true)
    }
    console.log(extractedFile);
    const handleShowMap = () => {
        setShowMap(!showMap)
    }
    const handleFilePopup = () => {
        setExtractedFilePopup(false)
        setExtractedFile([])
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        })
    }
    const { storeName, phoneNumber,
        storeAddress, zipCode, location,
        storeDaysStartTime, storeDaysCloseTime,
        pickupDaysStartTime, pickupDaysClosingTime,
        deliveryDaysStartingTime, deliveryDaysClosingTime,
        storeWednesday, storeThursday,
        storeFriday, storeSaturday, storeSunday,
    } = data;
    console.log(storeWednesday, storeThursday,
        storeFriday, storeSaturday, storeSunday);
    useEffect(() => {
        const getData = async () => {
            await axios.post(baseUrl + "/store/createStore", {
                name: storeName,
                contactNo: phoneNumber,
                adress: storeAddress,
                zipCode: zipCode,
                location: location
                // storeTiming: {

                // }
            }).then(response => {

            })

        }
    })

    return (
        <>

            <div className='addStore_container'>
                {extractedFilePopup === false ?
                    (<div className="store_fileExtractorBox">
                        <div className='addIcon_container'>
                            <p className='file_extractorIcon'>+</p>
                            <input onChange={handleGetFile} value={extractedFile} className='file_extractorInput' type="file" />
                        </div>
                        <label htmlFor="upload">Upload</label>
                    </div>
                    ) : (
                        <div className='store_fileExtractorBox fileInput_popUp' > <img src={AddFilePic} onClick={handleFilePopup} alt="" className='fileInput_popUp' /></div>
                    )}
                <div className="addStore_inputContainer">
                    <Input onChange={handleChange} name="storeName" type="borderless" placeholder="Enter your Storename" label="Store Name:" />
                    <Input onChange={handleChange} name="phoneNumber" type="borderless" placeholder="Enter your no" label="Store Contact No:" />
                    <Input onChange={handleChange} name="storeAddress" type="borderless" placeholder="Enter your Address" label="Store Address:" />
                    <Input onChange={handleChange} name="zipCode" type="borderless" placeholder="Zipcode" label="Zip Code:" />
                    <Input onChange={handleChange} name="location" type="borderless" placeholder="Location" label="Enter Your Location:" onClick={handleShowMap} icon={mapIcon} />
                </div>
                <div className="store_daysInputs">
                    <label htmlFor="Store Days" className='store_label'>Store Days</label>
                    <div className="days_inputContainer">
                        <DayCheckBox type="checkBox" name="storeMonday" value="1" label="Monday" />
                        <DayCheckBox type="checkBox" name="storeTuesday" value="2" label="Tuesday" />
                        <DayCheckBox type="checkBox" name="storeWednesday" value="3" label="Wednesday" />
                        <DayCheckBox type="checkBox" name="storeThursday " value="4" label="Thursday" />
                        <DayCheckBox type="checkBox" name="storeFriday   " value="5" label="Friday" />
                        <DayCheckBox type="checkBox" name="storeSaturday  " value="6" label="Saturday" />
                        <DayCheckBox type="checkBox" name="storeSunday   " value="7" label="Sunday" />
                    </div>
                    <div className="store_btnContainer">
                        <Input name="storeDaysStartTime" onChange={handleChange} type="time" />
                        <Input name="storeDaysCloseTime" onChange={handleChange} type="time" />

                    </div>
                </div>
                <div className="dividerLine"></div>
                <div className="full_widthDayContainer">
                    <div className="pickupDays_container">
                        <label htmlFor="Store Days" className='store_label'>Pickup Days</label>
                        <div className="days_inputContainer">
                            <DayCheckBox type="checkBox" value="Monday" label="Monday" />
                            <DayCheckBox type="checkBox" value="Tuesday" label="Tuesday" />
                            <DayCheckBox type="checkBox" value="Wednesday" label="Wednesday" />
                            <DayCheckBox type="checkBox" value="Thursday" label="Thursday" />
                            <DayCheckBox type="checkBox" value="Friday" label="Friday" />
                            <DayCheckBox type="checkBox" value="Saturday" label="Saturday" />
                            <DayCheckBox type="checkBox" value="Sunday" label="Sunday" />
                        </div>
                        <div className="store_btnContainer">
                            <Input name="pickupDaysStartTime" type="time" />
                            <Input name="pickupDaysClosingTime" type="time" />
                        </div>
                    </div>
                    <div className="deliveryDays_container">
                        <label htmlFor="Store Days" className='store_label'>Delivery Days</label>
                        <div className="days_inputContainer">
                            <DayCheckBox type="checkBox" value="Monday" label="Monday" />
                            <DayCheckBox type="checkBox" value="Tuesday" label="Tuesday" />
                            <DayCheckBox type="checkBox" value="Wednesday" label="Wednesday" />
                            <DayCheckBox type="checkBox" value="Thursday" label="Thursday" />
                            <DayCheckBox type="checkBox" value="Friday" label="Friday" />
                            <DayCheckBox type="checkBox" value="Saturday" label="Saturday" />
                            <DayCheckBox type="checkBox" value="Sunday" label="Sunday" />
                        </div>
                        <div className="store_btnContainer">
                            <Input name="deliveryDaysStartingTime" type="time" onChange={handleChange} />
                            <Input name="deliveryDaysClosingTime" type="time" />
                        </div>
                    </div>
                </div>
                <div className="dividerLine"></div>
                <div className="admin_emailContainer">
                    <label htmlFor="Store Days" className='store_label'>Admin Email</label>
                    <Input onChange={handleChange} type="borderless_fullLength" />
                    <div className="store_btnContainer">
                        <Button text="Save" type="primaryNormal" />
                        <Button type="blackOutlined" text="Cancel" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStore