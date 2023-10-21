import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";
const McScreen = () => {
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

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.9636.9007199266324985.de81c549-8be4-42fe-b2e9-d3f0a66deb8c.3cf5d31c-2d25-405e-8315-d167fdbccf73?mode=scale&q=90&h=1080&w=1920' />

                <img className='game-screenshots' src='https://play-lh.googleusercontent.com/UVlBCtOh1cZFn151jROxlY6tUWtMZpRkIfaWTJoJrqo6zvN81W0lYUHK5ZEtT84y5Q=w526-h296-rw' />

                <img className='game-screenshots' src='https://images.alphacoders.com/115/thumb-1920-1158827.jpg' />

                <img className='game-screenshots' src='https://play-lh.googleusercontent.com/tPYOrMZT8Devyv3vdtm9kCZbxrreY8wxbGZiv0OMLx0kc4vClJK6gxkEC879KsjVl3Gf' />

                <img className='game-screenshots' src='https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2014/08/18/1331672317245_2/modern-combat-5' />

            </Flickity>
        </>
    )
}

export default McScreen