import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";
const CandyScreen = () => {
    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,

    }
    return (
        <>
            <Flickity
                className='fl'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >

                <img className='game-screenshots' src='https://www.king.com/images/share/banners/candycrush.png?_v=kmoqjd' />

                <img className='game-screenshots' src='https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2014_04/133241/candy-crush-saga-screenshot-01.jpg' />

                <img className='game-screenshots' src='https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinny/554f9a5cad97b3c45e097db31047e919.png' />

                <img className='game-screenshots' src='https://cdn.mos.cms.futurecdn.net/uKjp2zg2ktMBYRbVEr2qTS.jpg' />

                <img className='game-screenshots' src='https://www.semana.com/resizer/6irJrDpUY0ohdZbjoRbmg1fdsSw=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/4PLIRARSEVGZ7PHB4CVRJEJIX4.webp' />

            </Flickity>
        </>
    )
}

export default CandyScreen