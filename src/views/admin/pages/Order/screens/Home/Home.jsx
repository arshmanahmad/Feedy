import React from 'react'
import './Home.css'
import ProfileBar from '../../../../components/ProfileBar/ProfileBar'
import profilePic from '../../../../assets/images/Ellipse 1.png'
import OrderTable from '../../components/OrdersTable/OrderTable'
const Home = () => {
    return (
        <>
            <div className="order_homeContainer">
                <div className="order_profileContainer">
                    <div className='order_headingText'>Order</div>
                    <div className="order_profileBar">
                        <ProfileBar img={profilePic} name="Arshman Ahmad" />
                    </div>
                </div>
                <div className="order_TableContainer">
                    <OrderTable
                        tableHeads={["Id", "name", "skills", "experience", "IQ"]}
                        array={[
                            { id: 1, name: "arshman", skills: "web", experience: "2", iq: "100", height: "5.7", color: "light brown", cast: "fighters" },
                            { id: 1, name: "arshman", skills: "web", experience: "2", iq: "100", height: "5.7", color: "light brown", cast: "fighters" },
                            { id: 1, name: "arshman", skills: "web", experience: "2", iq: "100", height: "5.7", color: "light brown", cast: "fighters" },
                            { id: 1, name: "arshman", skills: "web", experience: "2", iq: "100", height: "5.7", color: "light brown", cast: "fighters" },
                            { id: 1, name: "arshman", skills: "web", experience: "2", iq: "100", height: "5.7", color: "light brown", cast: "fighters" },
                        ]}
                        keysToDisplay={["id", "name", "skills", "experience", "iq"]}
                    />
                </div>
            </div>
        </>
    )
}

export default Home