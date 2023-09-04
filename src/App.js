import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MiniNavbar from './components/MiniNavbar/MiniNavbar';
import ImageForTheBanner from './components/ImageForTheBanner/ImageForTheBanner';
import CarritoIcon from './components/CarritoIcon/CarritoIcon';
import CarritoModal from './components/CarritoModal/CarritoModal';
import Box from './components/Box/Box'; // Importa el componente Box

function App() {
  const [carrito, setCarrito] = useState([]); // Estado del carrito
  const [carritoModalAbierto, setCarritoModalAbierto] = useState(false); // Estado del modal del carrito

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  // Función para abrir el modal del carrito
  const openCarritoModal = () => {
    setCarritoModalAbierto(true);
  };

  // Función para cerrar el modal del carrito
  const closeCarritoModal = () => {
    setCarritoModalAbierto(false);
  };

  return (
    <div className="App">
      <Header />
      <ImageForTheBanner />
      <MiniNavbar />
      <Box agregarAlCarrito={agregarAlCarrito} />
      <CarritoIcon openCarritoModal={openCarritoModal} /> {/* Abre el modal */}
      <CarritoModal carrito={carrito} closeModal={closeCarritoModal} eliminarDelCarrito={eliminarDelCarrito} carritoModalAbierto={carritoModalAbierto} />
    </div>
  );
}

export default App;
