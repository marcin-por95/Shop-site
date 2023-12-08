// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Twoja Firma. Wszystkie prawa zastrzeżone.</p>
        <ul className="footer-links">
          <li><Link to="/polityka-prywatnosci">Polityka prywatności</Link></li>
          <li><Link to="/regulamin">Regulamin</Link></li>
          <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
