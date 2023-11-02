import React from 'react';
import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Navbar() {
    return (
        <header>
            <h1>L U C H I A N A</h1>
            <nav>
                <ul>
                    <a href="/koszyk">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;
