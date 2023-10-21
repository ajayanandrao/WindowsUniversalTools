import React from 'react'
import "./Div.scss";

const Div = () => {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);


    return (
        <>
            <section>
                <h1>Scroll Down to Reveal Elements &#8595;</h1>
            </section>

            <section>

                <div className="container h reveal">
                    <h2>Caption</h2>
                </div>

            </section>


        </>
    )
}

export default Div