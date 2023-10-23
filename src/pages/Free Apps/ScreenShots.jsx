import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";

const ScreenShots = ({game}) => {
    const flickityOptions = {
        initialIndex: 1,
        wrapAround: true,

    }
    return (
        <div>
            <Flickity
                className='fl'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >

                <img className='game-screenshots' src={game.s1} />

                <img className='game-screenshots' src={game.s2} />

                <img className='game-screenshots' src={game.s3} />

                <img className='game-screenshots' src={game.s4} />

                <img className='game-screenshots' src={game.s5} />

            </Flickity>
        </div>
    )
}

export default ScreenShots