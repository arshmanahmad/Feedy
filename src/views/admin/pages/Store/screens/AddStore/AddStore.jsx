import React from 'react'
import './AddStore.css'
import Input from '../../../../../../components/Input/Input'
import mapIcon from "../../assets/icons/Vector (1).png"

const AddStore = () => {
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
                    <Input type="borderless" placeholder="Location" label="Enter Your Location:" icon={mapIcon} />
                </div>
                <div className="store_daysInputs">
                    {/* <label htmlFor="Store Days">Store Days</label> */}
                    <Input type="checkBox" day="Monday" />
                    <Input type="checkBox" day="Monday" />
                    <Input type="checkBox" day="Monday" />
                    <Input type="checkBox" day="Monday" />
                    <Input type="checkBox" day="Monday" />
                    <Input type="checkBox" day="Monday" />

                </div>
            </div>
        </>
    )
}

export default AddStore