import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";

const PeopleScreen = () => {
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

                <img className='game-screenshots' src='https://support.content.office.net/en-us/media/1740de54-2ee7-4dbf-93da-aefffead2738.png' />

                <img className='game-screenshots' src='https://www.windowslatest.com/wp-content/uploads/2017/02/Microsoft-People-app-for-windows-10-mobile-1-1280x720.jpg' />

                {/* <img className='game-screenshots' src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4n1fX?ver=7786&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true' />

                <img className='game-screenshots' src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/KM1_Share_and_Collaborate_1500x1020_RE4pFtT:VP4-630x449?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1500&hei=1020&qlt=100&fit=constrain' />

                <img className='game-screenshots' src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4nct6?ver=894a&q=90&h=1350&w=1660&b=%23FFFFFFFF&aim=true' /> */}

            </Flickity>
        </>
    )
}

export default PeopleScreen