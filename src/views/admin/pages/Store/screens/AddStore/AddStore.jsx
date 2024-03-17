import React from 'react'
import './AddStore.css'
import Input from '../../../../../../components/Input/Input'
import mapIcon from "../../assets/icons/Vector (1).png"
import DayCheckBox from '../../components/DayCheckBox/DayCheckBox'
import Button from '../../../../../../components/Button/Button'
import clockIcon from '../../assets/icons/icons8_clock 2.png'
const AddStore = () => {
    const handleShowMap = () => {

    }
    return (
        <>
            <div className='addStore_container'>
                <div className="store_fileExtractorBox">
                    <div className='addIcon_container'>
                        <p className='file_extractorIcon'>+</p>
                        <input className='file_extractorInput' type="file" />
                    </div>
                    <label htmlFor="upload">Upload</label>
                </div>
                <div className="addStore_inputContainer">
                    <Input type="borderless" placeholder="Enter your Storename" label="Store Name:" />
                    <Input type="borderless" placeholder="Enter your no" label="Store Contact No:" />
                    <Input type="borderless" placeholder="Enter your Address" label="Store Address:" />
                    <Input type="borderless" placeholder="Zipcode" label="Zip Code:" />
                    <Input type="borderless" placeholder="Location" label="Enter Your Location:" onClick={handleShowMap} icon={mapIcon} />
                </div>
                <div className="store_daysInputs">
                    <label htmlFor="Store Days" className='store_label'>Store Days</label>
                    <div className="days_inputContainer">
                        <DayCheckBox type="checkBox" label="Monday" />
                        <DayCheckBox type="checkBox" label="Tuesday" />
                        <DayCheckBox type="checkBox" label="Wednesday" />
                        <DayCheckBox type="checkBox" label="Thursday" />
                        <DayCheckBox type="checkBox" label="Friday" />
                        <DayCheckBox type="checkBox" label="Saturday" />
                        <DayCheckBox type="checkBox" label="Sunday" />
                    </div>
                    <div className="store_btnContainer">
                        <Button icon={clockIcon} type="time" text="08:00 pm" />
                        <Button icon={clockIcon} type="time" text="08:00 pm" />
                    </div>
                </div>
                <div className="dividerLine"></div>
                <div className="full_widthDayContainer">
                    <div className="pickupDays_container">
                        <label htmlFor="Store Days" className='store_label'>Pickup Days</label>
                        <div className="days_inputContainer">
                            <DayCheckBox type="checkBox" label="Monday" />
                            <DayCheckBox type="checkBox" label="Tuesday" />
                            <DayCheckBox type="checkBox" label="Wednesday" />
                            <DayCheckBox type="checkBox" label="Thursday" />
                            <DayCheckBox type="checkBox" label="Friday" />
                            <DayCheckBox type="checkBox" label="Saturday" />
                            <DayCheckBox type="checkBox" label="Sunday" />
                        </div>
                        <div className="store_btnContainer">
                            <Button icon={clockIcon} type="time" text="08:00 pm" />
                            <Button icon={clockIcon} type="time" text="08:00 pm" />
                        </div>
                    </div>
                    <div className="deliveryDays_container">
                        <label htmlFor="Store Days" className='store_label'>Delivery Days</label>
                        <div className="days_inputContainer">
                            <DayCheckBox type="checkBox" label="Monday" />
                            <DayCheckBox type="checkBox" label="Tuesday" />
                            <DayCheckBox type="checkBox" label="Wednesday" />
                            <DayCheckBox type="checkBox" label="Thursday" />
                            <DayCheckBox type="checkBox" label="Friday" />
                            <DayCheckBox type="checkBox" label="Saturday" />
                            <DayCheckBox type="checkBox" label="Sunday" />
                        </div>
                        <div className="store_btnContainer">
                            <Button icon={clockIcon} type="time" text="08:00 pm" />
                            <Button icon={clockIcon} type="time" text="08:00 pm" />
                        </div>
                    </div>
                </div>
                <div className="dividerLine"></div>
                <div className="admin_emailContainer">
                    <label htmlFor="Store Days" className='store_label'>Admin Email</label>
                    <Input type="borderless_fullLength" />
                    <div className="store_btnContainer">
                        <Button text="Save" type="primaryNormal" />
                        <Button type="blackOutlined" text="08:00 pm" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddStore