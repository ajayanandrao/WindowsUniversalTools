import React from 'react'
import "./../CollactionMixin.scss";
import "./../Asphalt.scss";

import ScreenShot from './../ScreenShot';
import McScreen from './McScreen';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';

const MC = () => {

    const bg_img = {
        backgroundImage: `url(${"https://wallpaperaccess.com/full/1901641.jpg"})`
    }
    const card_bg_img = {
        backgroundImage: `url(${"https://store-images.s-microsoft.com/image/apps.63730.9007199266324985.23780ae6-d955-45e9-865d-cb662f3f9863.79a3844d-571c-418d-b0b5-042c8c68208b?mode=scale&q=90&h=300&w=200"})`
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
                                <h1 className='game-title'>Modern Combat 5</h1>
                                <span className="game-comp">Gameloft SE </span>

                                <div className='stars-container'>
                                    <div className='starts' style={{ fontWeight: "600" }}>
                                        4.5 <i class="bi bi-star-fill"></i>
                                        <div style={{ fontSize: "14px", color: "#939293" }}>Average</div>
                                    </div>
                                    <div className='starts' style={{ fontWeight: "600" }}>
                                        4.5 <i class="bi bi-star-fill"></i>
                                        <div style={{ fontSize: "14px", color: "#939293" }}>Rating</div>
                                    </div>
                                    <div className='starts'>
                                        <img className='comp-logo' src='https://store-images.microsoft.com/image/global.56093.image.e3da543f-ed61-47ce-bc12-683dab90c502.5e57d206-3b82-4a7b-9b98-d1548cd450a8' />
                                        EVERYONE 10+
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
                                    <Link to="/gears/">
                                        <button className='btn btn-info install-btn btn-sm'>Download</button>
                                    </Link>
                                    <span className='purchases'>+ Offers in-app purchases</span>
                                </div>

                            </div>
                        </div>


                        <div className='game-screenShot-container'>
                            <div className='screen-text'>ScreenShots :</div>
                            <McScreen />
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
                                    <div style={{ fontSize: "14px", color: "#a6a5a7", fontWeight: "500" }}>Action</div>
                                </div>
                            </div>

                            <div className='add-flex mt-5'>
                                <div className='col-4'>
                                    <span style={{ fontWeight: "500" }}>Approximate Size</span>
                                    <div style={{ fontSize: "14px", color: "#a6a5a7", fontWeight: "500" }}>2 GB</div>
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
            <Footer />
        </>
    )
}

export default MC