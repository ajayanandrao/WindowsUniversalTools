import React, { Fragment } from 'react'
import cardList from './appList.json';
import "./../../HomeMixin.scss";
import "./AppList.scss";

const AppList = () => {

    const card = cardList.map(data => (
        <Fragment key={data.id}>
            <div className="ms-card-container m-2 btn">
                <div className="applist-ms-inner-container">
                    <div className="applis-ms-card-bg">
                        <img className='card-img' src={data.img} />
                    </div>
                    <div className='applist-text'>
                        <div className="ms-card-title mt-2" >
                            {data.title}
                        </div>
                        <div className="ms-card-cate" style={{fontWeight:"400"}}>
                            {data.description}
                        </div>


                        {
                            data.start && data.start.map(starts => {
                                return (
                                    <Fragment key={data.id}>
                                        <div className='json-list'>
                                            <li className='class-start'> <i className={starts.one}></i> </li>
                                            <li className='class-start mx-2'> <i className={starts.two}></i> </li>
                                            <li className='class-start'> <i className={starts.three}></i> </li>
                                            <li className='class-start mx-2'> <i className={starts.four}></i> </li>
                                            <li className='class-start'> <i className={starts.five}></i> </li>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    ))

    return (
        <>
            <div className="container">
                <div className="title-container">
                    <span>Best Apps</span><span className="see-all mx-5">See all</span>
                </div>

                <div className='center'>
                    <div className="Ms-container-grid">
                        {card}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppList