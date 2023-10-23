import React, { Fragment } from 'react'
import "./Essential.scss";

const Essential = (props) => {

    const ebg = {
        backgroundImage: `url(${props.bg})`
    }
    const wid = {
        width: (props.w)
    }
    return (
        <>
            <div className='e-app' style={ebg}>
                <div className='col'>
                    <h4>{props.title}</h4>
                    <div className='ess-text'>{props.ess_text}</div>
                    <button className='btn glass mt-4'>See all</button>
                </div>

                <div className='ess-grid-one'>
                    <div className="Ess-card-container btn">
                        <div className='Ess-img-container' style={wid}>
                            <img className='card-img' src={props.c_img_1} />
                        </div>

                        <div className='ess-app-container'>
                            <div className='ess-app-name'>{props.n1}</div>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "400" }}>{props.c1}</span>
                        <div className='ess-stars-container'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                    </div>
                </div>

                <div className='ess-grid-two'>
                    <div className="Ess-card-container btn">
                        <div className='Ess-img-container' style={wid}>
                            <img className='card-img' src={props.c_img_2} />
                        </div>

                        <div className='ess-app-container'>
                            <div className='ess-app-name'>{props.n2}</div>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "400" }}>{props.c2}</span>
                        <div className='ess-stars-container'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                    </div>
                </div>

                <div className='ess-grid-three'>
                    <div className="Ess-card-container btn">

                        <div className='Ess-img-container' style={wid}>
                            <img className='card-img' src={props.c_img_3} />

                        </div>

                        <div className='ess-app-container'>
                            <div className='ess-app-name'>{props.n3}</div>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "400" }}>{props.c3}</span>
                        <div className='ess-stars-container'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>

                    </div>

                </div>

                <div className='ess-grid-four'>
                    <div className="Ess-card-container btn">
                        <div className='Ess-img-container' style={wid}>
                            <img className='card-img' src={props.c_img_4} />
                        </div>

                        <div className='ess-app-container'>
                            <div className='ess-app-name'>{props.n4}</div>
                        </div>
                        <span style={{ fontSize: "14px", fontWeight: "400" }}>{props.c4}</span>
                        <div className='ess-stars-container'>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Essential