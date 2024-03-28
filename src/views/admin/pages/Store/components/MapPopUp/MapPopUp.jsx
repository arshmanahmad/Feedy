import React, { useEffect, useRef, useState } from 'react'
import './MapPopUp.css'
import mapCross from '../../assets/icons/topcoat_cancel.png';
import mapIcon from '../../assets/icons/Group.svg';

const MapPopUp = () => {
    const mapWrapper = useRef(null)
    const mapBoxWrapper = useRef(null);
    const handelMapDisappear = () => {
        mapWrapper.current.style.display = "none";
    }
    const handleMapState = (event) => {
        event.stopPropagation();
    }
    const handleCloseMap = () => {
        mapWrapper.current.style.display = "none";
    }
    return (
        <>
            <div ref={mapWrapper} className='map_container' onClick={handelMapDisappear}>
                <div ref={mapBoxWrapper} onClick={handleMapState} className="map_contentBox" >
                    <div className="map_paraContainer">
                        <p className='map_para'>Is this your location</p><img onClick={handleCloseMap} className='map_cross' src={mapCross} alt="" />
                    </div>
                    <div className="input_container">
                        <input type="text" /><img className='map_icon' src={mapIcon} alt="" />
                    </div>
                    <div className="map_box">

                    </div>
                    <div className="map_btnBox">
                        <button className='map_btn'>Pick Your Location</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapPopUp