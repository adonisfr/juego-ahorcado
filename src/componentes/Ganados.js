import React from 'react';
import { useSelector } from 'react-redux';
import Puntuacion from './Puntuacion';

const Ganados = () => {
  const juegosGanados = useSelector((state) => state.juegosGanados);
  return <Puntuacion puntuacion={juegosGanados} />;
};

export default Ganados;
