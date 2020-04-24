import listadoPreguntas from '../preguntas.json';

const ganasteJuegoAction = flag => {
  return {
    type: 'GANASTE',
    payload: flag
  };
};

const seleccionarLetraAction = letra => {
  return {
    type: 'LETRA_SELECCIONADA',
    payload: letra || ''
  };
};

const actualizarCantLetraIncorrectasAction = cantidad => {
  return {
    type: 'CANTIDAD_LETRAS_INCORRECTAS',
    payload: cantidad || 0
  };
};

const aumentarJuegosGanadoAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'JUEGOS_GANADOS',
      payload: getState().juegosGanados + 1
    });
  };
};

const actualizarCantLetraCorrectasAction = cantidad => {
  return (dispatch, getState) => {
    const cant = cantidad ? getState().cantLetraCorrectas + cantidad : 0;
    const { respuesta } = getState().pregunta;
    if (cant > 0 && respuesta.length === cant) {
      dispatch(aumentarJuegosGanadoAction());
      dispatch(ganasteJuegoAction(true));
    } else {
      dispatch({
        type: 'CANTIDAD_LETRAS_CORRECTAS',
        payload: cant
      });
    }
  };
};

const optenerPreguntaAction = () => {
  return dispatch => {
    const { preguntas } = listadoPreguntas;
    const aleatorio = Math.floor(Math.random() * 4);
    const id = aleatorio !== 0 ? aleatorio : 1;
    const { pregunta, respuesta } = preguntas[id];
    dispatch(seleccionarLetraAction(''));
    dispatch(actualizarCantLetraIncorrectasAction());
    dispatch(actualizarCantLetraCorrectasAction());
    dispatch({
      type: 'OBTENER_PREGUNTA',
      payload: {
        pregunta,
        respuesta
      }
    });
    dispatch(ganasteJuegoAction(false));
  };
};

const aumentarJuegosPerdidosAction = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'JUEGOS_PERDIDOS',
      payload: getState().juegosPerdidos + 1
    });
  };
};

export {
  optenerPreguntaAction,
  seleccionarLetraAction,
  actualizarCantLetraIncorrectasAction,
  actualizarCantLetraCorrectasAction,
  ganasteJuegoAction,
  aumentarJuegosGanadoAction,
  aumentarJuegosPerdidosAction
};
