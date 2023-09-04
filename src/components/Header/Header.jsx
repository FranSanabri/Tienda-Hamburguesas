// src/components/Header/Header.js
import React from 'react';
import './Header.css'; // Importa tu archivo CSS personalizado
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <a href="#">
          <img
            src="https://images.vexels.com/media/users/3/152477/isolated/preview/c40ce920eeb78818b72e8836b7460a62-comida-de-icono-de-hamburguesa-by-vexels.png"
            alt="Icono de la Empresa"
            className="company-icon"
            style={{ width: '55px', height: '50px' }}
          />
        </a>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item"> |📍 27 ESQUINA 18 |</li>
          <li className="nav-item">☎️ 2324-xxxxx |</li>
          <li className="nav-item">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
