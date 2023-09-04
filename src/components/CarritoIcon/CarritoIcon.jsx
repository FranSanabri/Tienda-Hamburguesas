import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CarritoIcon.css';

const CarritoIcon = ({ openCarritoModal }) => {
  const [agregado, setAgregado] = useState(false);

  // Efecto secundario para quitar la clase 'agregado' después de un tiempo
  useEffect(() => {
    if (agregado) {
      const timeoutId = setTimeout(() => {
        setAgregado(false);
      }, 1000); // Cambia la duración según tu preferencia
      return () => clearTimeout(timeoutId);
    }
  }, [agregado]);

  const handleIconClick = () => {
    openCarritoModal();
    setAgregado(true);
  };

  return (
    <div>
      <div
        className={`carrito-icon ${agregado ? 'agregado' : ''}`}
        onClick={handleIconClick}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default CarritoIcon;
