import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";

const StoreSreen = () => {

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

                <img className='game-screenshots' src='https://cdn.ttgtmedia.com/rms/onlineimages/Visual_Windows_Store_Windows_App_screenshot_mobile.jpg' />

                <img className='game-screenshots' src='https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/06/stories-1024-1.gif' />

                <img className='game-screenshots' src='https://cdn.mos.cms.futurecdn.net/6kdMGvNHhnLhxnemPGpW9L.jpg' />

                <img className='game-screenshots' src='https://sm.pcmag.com/pcmag_au/help/h/how-to-use/how-to-use-the-microsoft-store-in-windows-11_fe2c.png' />

                <img className='game-screenshots' src='https://i0.wp.com/pureinfotech.com/wp-content/uploads/2022/03/windows-11-fix-microsoft-store_hero.webp?fit=1680%2C1050&quality=78&strip=all&ssl=1' />

            </Flickity>
        </>
    )
}

export default StoreSreen