import React, { useState } from 'react'
import ProfileBar from '../../../../components/ProfileBar/ProfileBar'
import ProfilePic from '../../../../assets/images/Ellipse 1.png'
import Button from '../../../../../../components/Button/Button'
import "./EditCategoryPage.css"
import Input from '../../../../../../components/Input/Input'
const EditCategoryPage = () => {
    const [extractedFile, setExtractedFile] = useState(null)
    return (
        <>
            <div className="editText_mainBox">
                <div className="editText_firstRow">
                    <div className="editText_headingBtnBox">
                        <div className='editText_headingText'>Categories</div><Button text="+ Edit Category" type="action" />
                    </div>
                    <ProfileBar img={ProfilePic} name="Arshman Ahmed" editText="Edit Profile" />
                </div>
                <div className="editText_secondRow">
                    <div className="categories_firstColumn">
                        <div className="editText_headingText">
                            Edit Categories
                        </div>
                        <div className="categories_lengthyLine">
                        </div>
                        <div className="editText_fileExtractorBox">
                            <div className='editText_container'>
                                <p className='editText_extractorIcon'>+</p>
                                <input value={extractedFile} className='editText_extractorInput' type="file" />
                            </div>
                            <label htmlFor="upload">Upload</label>
                        </div>
                        <Input label="Category Name" type="border_fullLength" />
                        <label className='textarea_label' htmlFor="">Description</label>
                        <textarea className='editText_textarea'></textarea>
                        <div className="editText_btnContainer">
                            <Button text="Save" type="primaryNormal" />
                            <Button type="blackOutlined" text="Cancel" />
                        </div>
                    </div>
                    <div className="categories_heightyColumn">
                    </div>

                    <div className="categories_secondColumn">
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditCategoryPage