import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";


const TodoScreen = () => {

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

                <img className='game-screenshots' src='https://mspoweruser.com/wp-content/uploads/2018/09/Microsoft-To-Do.jpg' />

                <img className='game-screenshots' src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Dq09?ver=e26e' />


                <img className='game-screenshots' src='https://www.nextofwindows.com/wp-content/uploads/2019/01/Microsoft-Todo.jpg' />

                <img className='game-screenshots' src='https://2672686a4cf38e8c2458-2712e00ea34e3076747650c92426bbb5.ssl.cf1.rackcdn.com/2017-04-19-12-06-11.jpeg' />

            </Flickity>
        </>
    )
}

export default TodoScreen