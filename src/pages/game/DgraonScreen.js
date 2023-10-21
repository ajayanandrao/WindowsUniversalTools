import React from 'react'
import Flickity from 'react-flickity-component'
import "./../ScreenShot.scss";
const DgraonScreen = () => {
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

                <img className='game-screenshots' src='https://play-lh.googleusercontent.com/ig7AjmQkqhYNLVDjj8Y0h1-foYnyy9-EDAcew8rC8X6PiCQD6_0F1RLeTf90Jf94GxE=w526-h296-rw' />

                <img className='game-screenshots' src='https://www.playoholic.com/wp-content/uploads/2015/03/converted_file_f272dd6f.jpg' />

                <img className='game-screenshots' src='https://mmos.com/wp-content/gallery/dungeon-hunter-5/Dungeon-Hunter-5-boon-sister.jpg' />

                <img className='game-screenshots' src='https://mumu-global.fp.ps.easebar.com/file/612ad1c41901a82a44eaf226HKYSBZPf02' />

                <img className='game-screenshots' src='https://img.gg.deals/c7/c1/eec5a534006786a32bac8704e624fe975f17_1920xt1080_S1000.jpg' />

            </Flickity>
        </>
    )
}

export default DgraonScreen