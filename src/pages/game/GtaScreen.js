import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";
const GtaScreen = () => {
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

                <img className='game-screenshots' src='https://i.ytimg.com/vi/TtWxflUBlI0/maxresdefault.jpg' />

                <img className='game-screenshots' src='https://images.indianexpress.com/2020/08/GTA5steamlink.jpg' />

                <img className='game-screenshots' src='https://www.ayovaksindinkeskdi.id/wp-content/uploads/2022/10/gta-5-apk1.jpg' />

                <img className='game-screenshots' src='https://media.vandal.net/i/1200x630/11-2022/202211141272475_1.jpg' />

                <img className='game-screenshots' src='https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/uczkos4hqqvcrazs_1584428878.jpeg' />

            </Flickity>
        </>
    )
}

export default GtaScreen