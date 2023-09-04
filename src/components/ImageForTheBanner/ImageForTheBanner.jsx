// src/components/ImageForTheBanner/ImageForTheBanner.js
import React from 'react';
import './ImageForTheBanner.css'; // Importa tu archivo CSS personalizado para el banner

const ImageForTheBanner = () => {
  return (
    <div className="banner">
      <img
        src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-thickened-big-burger-promotion-simple-banner-image_196612.jpg" // Reemplaza "url_de_tu_imagen.jpg" con la URL de tu imagen de banner
        alt="Banner de la tienda de hamburguesas"
        className="banner-image"
      />
    </div>
  );
};

export default ImageForTheBanner;
