import React from 'react';
import Modal from 'react-modal';
import './CarritoModal.css';

const CarritoModal = ({ carrito, closeModal, eliminarDelCarrito, carritoModalAbierto }) => {
  const calcularPrecioTotal = () => {
    if (!carrito) {
      return 0; // Si carrito es undefined, el precio total es 0.
    }
    return carrito.reduce((total, producto) => total + producto.price, 0);
  };

  return (
    <Modal
      isOpen={carritoModalAbierto}
      onRequestClose={closeModal}
      className="carrito-modal"
      overlayClassName="carrito-modal-overlay"
    >
      <h2>Carrito de Compras</h2>
      <div className="carrito-lista">
        {!carrito || carrito.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          carrito.map((producto) => (
            <div className="carrito-item" key={producto.id}>
              <div>{producto.name}</div>
              <div>1</div>
              <div>${producto.price.toFixed(2)}</div>
              <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
      {carrito && carrito.length > 0 && (
        <p className="precio-total">Precio Total: ${calcularPrecioTotal().toFixed(2)}</p>
      )}
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

export default CarritoModal;
