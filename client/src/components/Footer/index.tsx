import React from "react"
import '../../scss/Styles/Footer.scss'


const Footer = () => {
    return (
            <div className="footer">
                <div className="footer__links">
                    <div className="footer__personal">
                        <p className="footer__text">
                            <span className="footer__span">Abuja, Nigeria</span>
                            <span className="footer__span">+234 9134954970</span>
                            <span className="footer__span">egualecharles@gmail.com</span>
                        </p>
                        </div>
                        <div className="footer__information">
                            <p className="footer__text">
                                <span className="footer__span">News</span>
                                <span className="footer__span">Suprises</span>
                                <span className="footer__span">Projects</span>
                            </p>

                            <p className="footer__text">
                                <span className="footer__span">Designs</span>
                                <span className="footer__span">Employers</span>
                                <span className="footer__span">FAQ</span>
                            </p>
                    </div>
                </div>
                <div className="footer__copywright">
                    <hr className="footer__line"/>
                    <p className="footer__copywrightText">ⓒ copywright</p>
                </div>
            </div>
    )
}

export default Footer;