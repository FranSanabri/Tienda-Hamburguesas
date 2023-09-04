// src/components/BebidasList/BebidasList.jsx
import React from 'react';
import './BebidasList.css'; // Importa tu archivo CSS personalizado

const BebidasList = () => {
  // Puedes crear un array de objetos para representar las bebidas
  const bebidas = [
    {
      id: 1,
      name: 'Coca-Cola',
      description: 'Refresco de cola clásico y refrescante.',
      price: 1.99,
      image: 'http://cdn.ecommercedns.uk/files/3/233233/8/9393648/f22a-00378949-cola-classic-1-5-litre.jpg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la bebida
    },
    {
      id: 2,
      name: 'Fanta',
      description: 'Jugo de naranja natural recién exprimido.',
      price: 2.49,
      image: 'https://images.jumpseller.com/store/mercaditosaludable-cl/6239746/D8F2E484-E4BB-4207-888E-03C165DE3C8F.png?1601906704', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la bebida
    },
    {
        id: 3,
        name: 'Sprite',
        description: 'Refresco de cola bien frío y burbujeante.',
        price: 1.99,
        image: 'https://www.tekkabazzar.com/wp-content/uploads/2020/10/Sprite-1.5L.jpg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la bebida
      },
      {
        id: 4,
        name: 'Pepsi',
        description: 'Gaseosa de naranja refrescante y llena de sabor.',
        price: 1.99,
        image: 'https://i5.walmartimages.ca/images/Enlarge/009/826/999999-69000009826.jpg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la bebida
      },
      {
        id: 5,
        name: 'Seven-Up',
        description: 'Gaseosa de limón con un toque cítrico y refrescante.',
        price: 1.99,
        image: 'https://mamma-roma.co.uk/wp-content/uploads/2021/02/949511.jpg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la bebida
      },
      {
        id: 6,
        name: 'Gaseosa de Lima-Limón',
        description: 'Gaseosa con sabor a lima-limón, refrescante y deliciosa.',
        price: 1.99,
        image: 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080445_f.jpg', // Reemplaza 'URL_DE_LA_IMAGEN' con la URL de la imagen de la bebida
      },
      // Puedes seguir agregando más bebidas de tu elección
      
    // Agrega más bebidas según sea necesario
  ];

  return (
    <div className="bebidas-list">
      {bebidas.map((bebida) => (
        <div className="bebida" key={bebida.id} id='bebidas'>
          <img
            src={bebida.image}
            alt={bebida.name}
            className="bebida-image"
          />
          <p className="bebida-name">{bebida.name}</p>
          <p className="bebida-description">{bebida.description}</p>
          <p className="bebida-price">${bebida.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default BebidasList;
