// src/components/ClickableIcons/ClickableIcons.js
import React from 'react';
import './ClickableIcons.css'; // Importa tu archivo CSS personalizado
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faGlassCheers, faBan } from '@fortawesome/free-solid-svg-icons';

const ClickableIcons = () => {
  return (
    <div className="clickable-icons">
      <a href="#hamburguesas" className="icon">
        <FontAwesomeIcon icon={faHamburger} className="icon" />
        <p>Hamburguesas</p>
      </a>
      <a href="#bebidas" className="icon">
        <FontAwesomeIcon icon={faGlassCheers} className="icon" />
        <p>Bebidas</p>
      </a>
      <a href="#sintacc" className="icon">
        <FontAwesomeIcon icon={faBan} className="icon" />
        <p>Sin TACC</p>
      </a>
    </div>
  );
};

export default ClickableIcons;
