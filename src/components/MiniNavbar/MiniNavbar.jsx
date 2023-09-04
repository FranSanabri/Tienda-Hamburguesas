// src/components/MiniNavbar/MiniNavbar.js
import React, { useState } from 'react';
import './MiniNavbar.css'; // Importa tu archivo CSS personalizado

const MiniNavbar = () => {
  const [showHours, setShowHours] = useState(false);

  const toggleHours = () => {
    setShowHours(!showHours);
  };

  return (
    <div className="mini-navbar">
      <button className="mini-navbar-button">Entrega a domicilio</button>
      <button className="mini-navbar-button">Para retirar</button>
      <div className="mini-navbar-dropdown">
        <button className="mini-navbar-dropdown-button" onClick={toggleHours}>
          Horarios
        </button>
        {showHours && (
          <div className="mini-navbar-hours">
            <p>Lunes a Viernes: 10:00 AM - 9:00 PM</p>
            <p>Sábados y Domingos: 11:00 AM - 8:00 PM</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniNavbar;
