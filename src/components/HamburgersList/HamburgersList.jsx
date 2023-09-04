// src/components/HamburgersList/HamburgersList.jsx
import React from 'react';
import './HamburgersList.css'; // Importa tu archivo CSS personalizado

const HamburgersList = () => {
  // Puedes crear un array de objetos para representar las hamburguesas
  const hamburgers = [
    {
      id: 1,
      name: 'Hamburguesa Clásica',
      description: 'Una deliciosa hamburguesa clásica con carne, lechuga, tomate y queso.',
      price: 9.99,
      image: 'https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg',
    },
    {
      id: 2,
      name: 'Hamburguesa de Pollo',
      description: 'Una hamburguesa de pollo crujiente con lechuga, tomate y mayonesa.',
      price: 8.99,
      image: 'https://www.entrenamiento.com/wp-content/uploads/2018/08/hamburguesa-de-pollo-saludable.jpg',
    },
    {
        id: 3,
        name: 'Hamburguesa Vegetariana',
        description: 'Una hamburguesa vegetariana hecha con garbanzos y verduras frescas.',
        price: 7.99,
        image: 'https://nataliapenchasdotcom.files.wordpress.com/2014/02/dsc_0483.jpg?w=2000',
      },
      {
        id: 4,
        name: 'Hamburguesa BBQ',
        description: 'Una hamburguesa con salsa barbacoa, cebolla caramelizada y bacon.',
        price: 10.99,
        image: 'https://thumbs.dreamstime.com/b/hamburguesa-del-bbq-con-tocino-y-cebollas-71619920.jpg',
      },
      {
        id: 5,
        name: 'Hamburguesa de Pescado',
        description: 'Una hamburguesa de pescado fresco con lechuga y salsa tártara.',
        price: 11.99,
        image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/hamburguesa-de-pescado.jpg',
      },
      {
        id: 6,
        name: 'Hamburguesa de Ternera y Champiñones',
        description: 'Una hamburguesa de ternera jugosa con champiñones salteados y queso suizo.',
        price: 11.49,
        image: 'https://d1uz88p17r663j.cloudfront.net/original/31621f64ec8fd1835f74449b071a8889_hamburguesa_con_champi%C3%B1ones_1.jpg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la hamburguesa
      }
      
      // Puedes agregar más hamburguesas según sea necesario
    ];

  return (
    <div className="hamburgers-list">
      {hamburgers.map((hamburger) => (
        <div className="hamburger" key={hamburger.id} id='hamburguesas'>
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

export default HamburgersList;
