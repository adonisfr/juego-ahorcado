import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import {
  actualizarJuegosGanadosAction,
  actualizarJuegosPerdidosAction,
  actualizarListadoPreguntasDelJuegoAction
} from './actions/juegoActions';
import listadoPreguntas from './preguntas.json';

const ReiniciarJuego = () => {
  const dispatch = useDispatch();
  const reiniciar = () => {
    dispatch(actualizarJuegosGanadosAction());
    dispatch(actualizarJuegosPerdidosAction());
    const { preguntas } = listadoPreguntas;
    dispatch(actualizarListadoPreguntasDelJuegoAction(preguntas));
  };
  return (
    <Button type="default" onClick={reiniciar}>
      Jugar otra vez
    </Button>
  );
};

export default ReiniciarJuego;
