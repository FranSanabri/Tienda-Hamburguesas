import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CarritoIcon.css';
import CarritoModal from '../CarritoModal/CarritoModal';

const CarritoIcon = ({ openCarritoModal }) => {
  return (
    <div>
      <div className="carrito-icon" onClick={openCarritoModal}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default CarritoIcon;
