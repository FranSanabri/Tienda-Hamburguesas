// src/App.js
import React from 'react';
import './App.css'; // Importa tu archivo CSS global si lo tienes
import Header from './components/Header/Header';
import Box from './components/Box/Box'; // Incluye el componente Box
import MiniNavbar from './components/MiniNavbar/MiniNavbar';
import ImageForTheBanner from './components/ImageForTheBanner/ImageForTheBanner';
import CarritoIcon from './components/CarritoIcon/CarritoIcon';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageForTheBanner />
      <MiniNavbar />
      <Box /> {/* Coloca el componente Box aquí */}
      <CarritoIcon />
    </div>
  );
}

export default App;
