import React from 'react'
import { Link } from 'react-router-dom'

import LogoDark from '../assets/logo_dark.png'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={LogoDark} className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">
                            Home
                        </Link>
                        <Link to="/Linkbout" className="footer__link">
                            About
                        </Link>
                        <Link to="/albums" className="footer__link">
                            Albums
                        </Link>
                        <Link to="/cart" className="footer__link">
                            Cart
                        </Link>
                    </div>
                    <div className="footer__copyright">
                        &copy; 2022 Muki Music by{' '}
                        <a href="https://github.com/aryanprince/">Aryan Prince</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
