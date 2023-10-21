import React from 'react'
import gr from "./img/gr4.png";
import "./App.scss";
import $ from "jquery";

const Gears = () => {

    var $elie = $("#ConeDiv");
    rotate(0);
    function rotate(degree) {

        // For webkit browsers: e.g. Chrome
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
        // For Mozilla browser: e.g. Firefox
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });

        // Animate rotation with a recursive call
        setTimeout(function () { rotate(++degree); }, 30);
    }

    return (
        <>
            <div className="gear-contanier">
                <div className='inner-gear-container'>
                    <div>
                    <img id='ConeDiv' style={{ width: "100px" }} src={gr} />
                    <img id='CtwoDiv' style={{ width: "60px" }} src={gr} />
                    </div>
                    <h1 className='mt-2'>Work in Progress</h1>
                </div>
            </div>
        </>
    )
}

export default Gears