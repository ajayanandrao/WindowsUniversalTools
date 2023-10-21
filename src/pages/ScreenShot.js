import React from 'react'
import Flickity from 'react-flickity-component'
import "./ScreenShot.scss";
const ScreenShot = () => {

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

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.17071.9007199266242715.49d2b2a8-8240-4c93-bd0b-209bee7ba373.1d94db07-c538-44ab-9bc7-273f0d1c2fa9?w=1399&h=787&q=90&format=jpg' />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.2993.9007199266242715.49d2b2a8-8240-4c93-bd0b-209bee7ba373.0963f95b-0caa-4196-bb35-9b87e7c22617?w=1399&h=787&q=90&format=jpg' />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.28526.9007199266242715.49d2b2a8-8240-4c93-bd0b-209bee7ba373.c0714a3a-a998-45df-9262-fa443dd8bb2d?w=1399&h=787&q=90&format=jpg' />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.51612.9007199266242715.49d2b2a8-8240-4c93-bd0b-209bee7ba373.f9a038af-1d53-4ef4-9304-ffd8a9453cd0?w=1399&h=787&q=90&format=jpg' />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.49590.9007199266242715.49d2b2a8-8240-4c93-bd0b-209bee7ba373.2bc7dc1b-cbcd-4b2b-bec2-01a76ab5d707?w=1399&h=787&q=90&format=jpg' />

            </Flickity>
        </>
    )
}

export default ScreenShot