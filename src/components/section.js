import React from "react";
import balloon from '../images/balloon.png'

const secContent = [
    {
        title1: "SPOTIFY PREMIUM",
        title2: "Get 3 months of Premium for free",
        description: "Enjoy ad-free music, offline listening, and more. Cancel anytime.",
        button: "GET 3 MONTHS FREE",
        note: "Individual plan only. Only $9.99/month after. Offer not available to users who already tried Premium. Terms and conditions apply. Offer ends Dec 31, 2020."
    },
    {
        title1: "2020 WRAPPED",
        title2: "See how you listened",
        description: "Find out the artists, songs, and podcasts that got you through the longest year ever.",
        button: "EXPLORE YOUR WRAPPED"
    },
    {
        title1: "SPOTIFY FREE",
        title2: "Listening is everything",
        description: "Millions of songs and podcasts. No credit card needed.",
        button: "GET SPOTIFY FREE"
    }
]


const Section1 = () => {
    // console.log(typeof secContent);
    // console.log(secContent[0]);
    // console.log(secContent);
    return <section id="sec-1">
        <div className="container">
            <div className="content">
                <div className="text">
                    <div className="title-1">{secContent[0].title1}</div>
                    <div className="title-2">{secContent[0].title2}</div>
                    <div className="description">{secContent[0].description}</div>
                    <button>{secContent[0].button}</button>
                    <div className="note">{secContent[0].note}</div>
                </div>
                <img src={balloon} alt="balloon"></img>
            </div>
        </div>
    </section>
}

const Section2 = () => {
    return <section id="sec-2">
        <div className="container">
            <div className="content">
                <div id="back">
                    <div id="front">2020<br></br>Wrapped</div>
                </div>
                <div className="text">
                    <div className="title-1">{secContent[1].title1}</div>
                    <div className="title-2">{secContent[1].title2}</div>
                    <div className="description">{secContent[1].description}</div>
                    <button>{secContent[1].button}</button>
                </div>
            </div>
        </div>
    </section>
}

const Section3 = () => {
    return <section id="sec-3">
        <div className="container">
            <div className="content">
                <div className="text">
                    <div className="title-1">{secContent[2].title1}</div>
                    <div className="title-2">{secContent[2].title2}</div>
                    <div className="description">{secContent[2].description}</div>
                    <button>{secContent[2].button}</button>
                </div>
            </div>
        </div>
    </section>
}

export {
    Section1,
    Section2,
    Section3
};
