import React from "react";
import '../../scss/Styles/About.scss'

const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="about__h1">What We Do</h1>
            <div className="about__about1">
                    <img 
                        src="https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt=""
                        className="about__img1"
                        />
                <p className="about__p1">Unique high-end material gives you the wow factor. <br /> This luxury clothing brand is bound to impress.</p>
            </div>
            <div className="about__about2">
            <p className="about__p2">Discover the latest fashion trends with Surge.  <br /> Shop the new collection of clothing, footwear, accessories <br /> beauty products and more.</p>
                     <img 
                        src="https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt=""
                        className="about__img2"
                        />
            </div>
        </div>
    )
}

export default About;

