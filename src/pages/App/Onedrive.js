import React from 'react'
import "./../CollactionMixin.scss";
import "./../Asphalt.scss";

import ScreenShot from './../ScreenShot';
import OneScreen from './OneScreen';
import Footer from '../../Footer';

import Odrive from "./../../Apps/Onedrive.zip";

const Onedrive = () => {

    const bg_img = {
        backgroundImage: `url(${"https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE4q0pH?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=95&fmt=png-alpha&fit=constrain"})`
    }
    const card_bg_img = {
        backgroundImage: `url(${"https://oit.ua.edu/wp-content/uploads/2021/02/OneDrive_256x256.png"})`
    }

    return (
        <>
            <div className='card-one' style={bg_img}>

                <div className='bg-color'>
                    <div className='bg-linear-container'>

                        <div className='flex-container'>

                            <div className='img-container'>
                                <div className='bg-card-container' style={card_bg_img}></div>
                            </div>

                            <div className='text-container'>
                                <h1 className='game-title'>OneDrive</h1>
                                <span className="game-comp"> Microsoft Corporation </span>

                                <div className='stars-container'>
                                    <div className='starts' style={{ fontWeight: "600" }}>
                                        4.5 <i className="bi bi-star-fill"></i>
                                        <div style={{ fontSize: "14px", color: "#939293" }}>Average</div>
                                    </div>
                                    <div className='starts' style={{ fontWeight: "600" }}>
                                        4.5 <i className="bi bi-star-fill"></i>
                                        <div style={{ fontSize: "14px", color: "#939293" }}>Rating</div>
                                    </div>
                                    <div className='starts'>
                                        <img className='comp-logo' src='https://store-images.microsoft.com/image/global.56093.image.e3da543f-ed61-47ce-bc12-683dab90c502.5e57d206-3b82-4a7b-9b98-d1548cd450a8' />
                                        EVERYONE
                                    </div>
                                </div>

                                <div className="asphalt-btn-container">
                                    <button className='btn btn-primary btn-color btn-sm'>Racing & flying</button>
                                    <button className='btn btn-primary btn-color btn-sm mx-2'>Simulation</button>
                                    <button className='btn btn-primary btn-color btn-sm'>Sports</button>
                                </div>

                                <div className='top-description-container'>
                                    Race in spectacular real-life locations with prestigious cars (Ferrari,Porsche, McLaren, etc.) to collect, upgrade and customize. Experience action-packed gameplay that rewards skillful play and risk-raking in single-or multiplayer. Game updates are coming up with new cars, locations and features.
                                </div>

                                <div className="install-btn-container">
                                <a href={Odrive} download="Onedrive.zip">
                                    <button className='btn btn-info install-btn btn-sm' >Download</button>
                                </a>    
                                    <span className='purchases'>+ Offers in-app purchases</span>
                                </div>

                            </div>
                        </div>


                        <div className='game-screenShot-container'>
                            <div className='screen-text'>ScreenShots :</div>
                            <OneScreen/>
                        </div>

                        <div className='description-container'>
                            <div className='desc-text'>Description :</div>
                            <div>
                                Legendary cars to collect and customize
                                Race with the most amazing speed machines handpicked among world-renown manufacturers. Upgrade their stats, pick the color of their brake calipers or add carbon parts and more, to fully customize your rides.
                            </div>

                            <div>
                                Breathtaking tracks
                                Feel the thrill of gravity-defying races across 185 tracks in 13 real world locations, such as San Francisco, Cairo or Osaka. Race around giant tornadoes in the American
                            </div>
                        </div>

                        <div className='additional-container'>
                            <div className='add-text'>Additional information</div>

                            <div className='add-flex'>
                                <div className='col'>
                                    <span style={{ fontWeight: "500" }}>Published by</span>
                                    <div style={{ fontSize: "14px", color: "#a6a5a7", fontWeight: "500" }}>Gameloft SE</div>
                                </div>

                                <div className='col mx-3'>
                                    <span style={{ fontWeight: "500" }}>Release Date</span>
                                    <div style={{ fontSize: "14px", color: "#a6a5a7", fontWeight: "500" }}>7/18/2018</div>
                                </div>

                                <div className='col'>
                                    <span style={{ fontWeight: "500" }}>Category</span>
                                    <div style={{ fontSize: "14px", color: "#a6a5a7", fontWeight: "500" }}>Racing & flying</div>
                                </div>
                            </div>

                            <div className='add-flex mt-5'>
                                <div className='col-4'>
                                    <span style={{ fontWeight: "500" }}>Approximate Size</span>
                                    <div style={{ fontSize: "14px", color: "#a6a5a7", fontWeight: "500" }}>3.7 GB</div>
                                </div>


                                <div className='col'>
                                    <span style={{ fontWeight: "500" }}>This app can</span>
                                    <div style={{ fontSize: "14px", color: "#a6a5a7", fontWeight: "500" }}>Access your Internet connection</div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Onedrive