import React from "react";
import '../../scss/Styles/Intro.scss'
import { HashLink as Link } from 'react-router-hash-link'

const Intro = () => {
    return (
        <div className="intro" id="home">
            <div className="intro__content">
                <h1 className="intro__text">Surge</h1>
                <Link to='#contacts' smooth>
                    <button className="intro__contact">Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default Intro;