import React from 'react';
import './NavBar.scss';
function Navbar() {
    return (
        <header>
            <h1>L U C H I A N A</h1>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/Products">SHOP</a></li>
                    <li><a href="/Kontakt">CONTACT</a></li>
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;
