import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { optenerPreguntaAction } from './actions/juegoActions';

const NuevoJuegoBtn = () => {
  const dispatch = useDispatch();
  const reiniciar = () => {
    dispatch(optenerPreguntaAction());
  };
  return (
    <Button type="default" onClick={reiniciar}>
      Nuevo juego
    </Button>
  );
};

export default NuevoJuegoBtn;
