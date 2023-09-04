// src/components/Searchbar/Searchbar.js
import React, { useState } from 'react';
import './Searchbar.css'; // Importa tu archivo CSS personalizado

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Aquí puedes agregar la lógica para realizar la búsqueda en tiempo real
    // Puedes usar el valor de 'searchTerm' para buscar coincidencias en tus datos
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar hamburguesas o bebidas"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default Searchbar;
