import React, { Fragment } from 'react'
import "./FreeApps.scss";
import applist from "./fapp.json";
import { Link } from 'react-router-dom';

const FreeApps = () => {

    const listjson = applist && applist.map(array => {
        return (
            <Fragment key={array.id}>
                <Link to={array.link}>
                    <div className='f-card-container'>
                        <div className='f-card-square'>
                            <img className='f-card-img' src={array.img} />
                        </div>
                        <div className='f-card-text'>
                            <span className='' style={{ fontWeight: "500", fontSize: "16px" }}>{array.name}</span>
                            <div style={{ fontSize: "12px" }}>Apps . Productivity</div>
                            <div style={{ fontSize: "12px" }}>
                                <i className="bi bi-star-fill" style={{ marginLeft: "0px" }}></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                        </div>
                    </div>
                </Link>
            </Fragment>
        )
    })

    return (
        <>
            <div className="container">
                <div className="App-title-container mb-3">
                    <span>Top free apps</span><span className="see-all mx-5">See all</span>
                </div>

                <div className='center'>

                    <div className='f-card-grid'>
                        {listjson}
                    </div>



                </div>
            </div>
        </>
    )
}

export default FreeApps