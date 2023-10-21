import React from 'react'
import Flickity from 'react-flickity-component'
import "./AppScreenShot.scss";
const AppScreenShot = (props) => {

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

                <img className='game-screenshots' src="https://store-images.s-microsoft.com/image/apps.11862.9007199266248608.b3406559-b83d-4df9-80e7-2b65d2c96c59.abd6bef9-86b6-40a3-92b1-eeb30a59264d" />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.15659.9007199266248608.0f76f875-167e-478a-9c05-67b54ad36521.fa449dc5-08cf-4b4a-9d80-12cd6ee682b8' />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.44687.9007199266248608.b7bd80b8-217c-4cab-a75c-8d54886ed006.a9fad964-c04d-42a8-81f2-04d5e0614f3a' />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.47905.9007199266248608.456331ad-1b24-48fa-82f2-88667c9acfb2.476a5afe-54c7-4439-a20f-8e00d0788380' />

                <img className='game-screenshots' src='https://store-images.s-microsoft.com/image/apps.62129.9007199266248608.0788ba1a-7547-49fb-8541-0c8649498a1e.893588e5-c881-4afb-bf8d-3b4f8c6bef03' />

            </Flickity>
        </>
    )
}

export default AppScreenShot