import React, { Fragment } from 'react'
import './Home.scss';
import cardList from "./data.json";
import "./HomeMixin.scss";
import { Link } from 'react-router-dom';

const card = cardList.map(data => (
    <Fragment key={data.id}>
        <Link to={data.link}>
        <div className="ms-card-container m-2">
            <div className="ms-inner-container">
                <div className="ms-card-bg">
                    <img className='card-img' src={data.img} />
                </div>
                <div className="ms-card-title mt-2">
                    {data.title}
                </div>
                <div className="ms-card-cate">
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
        </Link>
    </Fragment>
))

const Home = () => {
    return (
        <>

            <div className="container">
                <div className="title-container">
                    <span>Best Selling Game</span><span className="see-all mx-5">See all</span>
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

export default Home