import React from 'react';
import { useSelector } from 'react-redux';
import Puntuacion from './Puntuacion';

const Perdidos = () => {
  const juegosPerdidos = useSelector((state) => state.juegosPerdidos);
  return <Puntuacion puntuacion={juegosPerdidos} />;
};

export default Perdidos;
