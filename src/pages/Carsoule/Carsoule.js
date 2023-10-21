import React from 'react'
import "./Carsoule.scss";

const Carsoule = () => {
    return (
        <>
            <div className="h">
                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='img-obj'>
                            <img src="https://i.pinimg.com/736x/5c/bf/ca/5cbfca02940248e6617eea9b31911cbf.jpg" className="d-block img" alt="..." />
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div className='img-obj'>
                            <img src="https://i.pinimg.com/originals/5c/bf/ca/5cbfca02940248e6617eea9b31911cbf.jpg" className="d-block img" alt="..." />
                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className='img-obj'>
                            <img src="https://wi.wallpapertip.com/wsimgs/2-26054_desktop-backgrounds-tumblr-grunge-pine-trees.jpg" className="d-block img" alt="..." />
                            </div>
                            
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carsoule