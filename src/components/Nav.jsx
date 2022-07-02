import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LibraryLogo from '../assets/Library.svg'

export default function Nav() {
    // FUNCTIONS TO OPEN AND CLOSE MOBILE NAVBAR
    function openMenu() {
        document.body.classList += ' menu--open'
    }
    function closeMenu() {
        document.body.classList.remove('menu--open')
    }

    return (
        <nav>
            {/* WHOLE NAVBAR */}
            <div className="nav__container">
                {/* NAVBAR IMAGE */}
                <Link to="/">
                    <img src={LibraryLogo} alt="" className="logo" />
                </Link>

                {/* MAIN NAVBAR */}
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/books" className="nav__link">
                            Books
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        <span className="cart__length">3</span>
                    </li>
                </ul>

                {/* MOBILE NAVBAR */}
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close" onClick={closeMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="/" className="menu__link">
                                Home
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/books" className="menu__link">
                                Books
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cart" className="menu__link">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
