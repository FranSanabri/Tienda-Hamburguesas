// src/components/Box/Box.js
import React from 'react';
import './Box.css'; // Importa tu archivo CSS personalizado
import Searchbar from '../Searchbar/Searchbar';
import ClickableIcons from '../ClickableIcons/ClickableIcons';
import HamburgersList from '../HamburgersList/HamburgersList';
import BebidasList from '../BebidasList/BebidasList'; // Importa el componente BebidasList
import HamburgersWithoutTaccList from '../HamburgersWithoutTaccList/HamburgersWithoutTaccList';

const Box = ({ agregarAlCarrito } ) => {
  return (
    <div className="box">
      <div className="box-content">
        <Searchbar />
        <ClickableIcons />
        <hr />
        <HamburgersList agregarAlCarrito={agregarAlCarrito}/>
        <hr />
        <BebidasList agregarAlCarrito={agregarAlCarrito}/> {/* Agrega la lista de bebidas aquí */}
        <hr />
        <HamburgersWithoutTaccList agregarAlCarrito={agregarAlCarrito}/>
      </div>
    </div>
  );
};

export default Box;
