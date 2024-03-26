import React from 'react'
import './MapPopUp.css'
import mapCross from '../../assets/icons/topcoat_cancel.png';
import mapIcon from '../../assets/icons/Group.svg';

const MapPopUp = () => {
    return (
        <>
            <div className='map_container'>
                <div className="map_contentBox">
                    <div className="map_paraContainer">
                        <p className='map_para'>Is this your location</p><img className='map_cross' src={mapCross} alt="" />
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