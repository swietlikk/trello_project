import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="top-menu">
                    <li><Link to="/login">Zaloguj się</Link></li>
                    <li><Link to="/register">Zarejestruj się</Link></li>
                </ul>
                <ul className="bottom-menu">
                    <li><ScrollLink to="oddaj-rzeczy" smooth={true} duration={500}>Oddaj rzeczy</ScrollLink></li>
                    <li><ScrollLink to="zorganizuj-zbiorkę" smooth={true} duration={500}>Zorganizuj zbiórkę</ScrollLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;