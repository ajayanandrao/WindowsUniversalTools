import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";
const HaloScreen = () => {
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

                <img className='game-screenshots' src='https://cdn.akamai.steamstatic.com/steam/apps/277430/ss_3bf0f47b66448c768f5c3edd05b2290898a5c732.1920x1080.jpg?t=1667852203' />

                <img className='game-screenshots' src='https://s3.amazonaws.com/prod-media.gameinformer.com/styles/thumbnail/s3/legacy-images/Small%20Scale%20Halo/halospartanassaultreview_610.jpg' />

                <img className='game-screenshots' src='https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/uploads/2013/08/haloupdate-hero_0.jpg?itok=dAWlq1ny' />

                <img className='game-screenshots' src='https://cdn.toucharcade.com/wp-content/uploads/2015/04/IMG_4720.jpg' />

                <img className='game-screenshots' src='https://www.denverpost.com/wp-content/uploads/2016/04/20140107__b4133f03-0a9c-4121-82b6-6f0b59f5f657s200l.jpg?w=528' />

            </Flickity>
        </>
    )
}

export default HaloScreen