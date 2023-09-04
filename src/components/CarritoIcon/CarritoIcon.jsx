// src/components/CarritoIcon/CarritoIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CarritoIcon.css';

const CarritoIcon = () => {
  return (
    <div className="carrito-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default CarritoIcon;
