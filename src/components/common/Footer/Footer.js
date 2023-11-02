import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2023 Twoja Firma. Wszystkie prawa zastrzeżone.</p>
                <ul className="footer-links">
                    <li><a href="/polityka-prywatnosci">Polityka prywatności</a></li>
                    <li><a href="/regulamin">Regulamin</a></li>
                    <li><a href="/kontakt">Kontakt</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
