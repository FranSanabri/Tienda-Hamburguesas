import React from 'react';
import './HamburgersWithoutTaccList.css'; // Importa tu archivo CSS personalizado

const HamburgersWithoutTaccList = () => {
  const hamburgersWithoutTacc = [
    {
      id: 1,
      name: 'Hamburguesa sin TACC Clásica',
      description: 'Una deliciosa hamburguesa clásica sin gluten con carne, lechuga, tomate y queso.',
      price: 10.99,
      image: 'http://ilsole.com.ar/wp-content/uploads/2016/07/figacitas-sin-tacc-sin-gluten-il-sole-768x509.jpg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la hamburguesa
    },
    {
      id: 2,
      name: 'Hamburguesa sin TACC de Pollo',
      description: 'Una hamburguesa de pollo sin gluten crujiente con lechuga, tomate y mayonesa.',
      price: 9.99,
      image: 'https://recetasfitness10.com/wp-content/uploads/2018/08/burguer.jpeg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la hamburguesa
    },
    // Puedes agregar más hamburguesas sin TACC según sea necesario
  ];

  return (
    <div className="hamburgers-without-tacc-list">
      {hamburgersWithoutTacc.map((hamburger) => (
        <div className="hamburger" key={hamburger.id} id='sintacc'>
          <img
            src={hamburger.image}
            alt={hamburger.name}
            className="hamburger-image"
          />
          <p className="hamburger-name">{hamburger.name}</p>
          <p className="hamburger-description">{hamburger.description}</p>
          <p className="hamburger-price">${hamburger.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default HamburgersWithoutTaccList;
