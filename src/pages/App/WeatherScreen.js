import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";


const WeatherScreen = () => {
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

                <img className='game-screenshots' src='https://i1.wp.com/i.blogs.es/236ed3/tiempo-microsoft-4/840_560.jpg' />

                <img className='game-screenshots' src='https://cdn.wallpapersafari.com/62/67/VGn81k.jpg' />

                <img className='game-screenshots' src='https://mspoweruser.com/wp-content/webp-express/webp-images/uploads/2022/01/MSN-Meteo-per-Windows-11-Nuovo-design-schermata-principale.jpg.webp' />

                <img className='game-screenshots' src='https://winaero.com/blog/wp-content/uploads/2017/09/weather-app-settings-icon.png' />

                <img className='game-screenshots' src='https://windows-cdn.softpedia.com/screenshots/Weather-for-Windows-8_4.png' />

            </Flickity>
        </>
    )
}

export default WeatherScreen