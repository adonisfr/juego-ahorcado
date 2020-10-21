const ganasteJuegoAction = (flag) => {
  return {
    type: 'GANASTE',
    payload: flag
  };
};

const actualizarCantLetraIncorrectas = (cantidad) => {
  return {
    type: 'CANTIDAD_LETRAS_INCORRECTAS',
    payload: cantidad || 0
  };
};

const actualizarListadoPreguntasDelJuegoAction = (listado) => {
  return {
    type: 'ACTUALIZAR_LISTADO_PREGUNTA_DEL_JUEGO',
    payload: listado || []
  };
};

const actualizarJuegosGanadosAction = (ganados) => {
  return {
    type: 'JUEGOS_GANADOS',
    payload: ganados || 0
  };
};

const aumentarJuegosGanadoAction = () => {
  return (dispatch, getState) => {
    const { id } = getState().pregunta;
    const preguntas = getState().listadoPreguntasDelJuego;
    const listado = preguntas.filter((i) => i.id !== id);
    dispatch(actualizarListadoPreguntasDelJuegoAction(listado));
    const ganados = getState().juegosGanados + 1;
    dispatch(actualizarJuegosGanadosAction(ganados));
  };
};

const actualizarCantLetraCorrectas = (cantidad) => {
  return {
    type: 'CANTIDAD_LETRAS_CORRECTAS',
    payload: cantidad || 0
  };
};

const aumentarCantLetraCorrectasAction = (cantidad) => {
  return (dispatch, getState) => {
    const cant = cantidad ? getState().cantLetraCorrectas + cantidad : 0;
    const { respuesta } = getState().pregunta;
    if (cant > 0 && respuesta.length === cant) {
      dispatch(aumentarJuegosGanadoAction());
      dispatch(ganasteJuegoAction(true));
    } else {
      dispatch(actualizarCantLetraCorrectas(cant));
    }
  };
};

const seleccionarLetraAction = (letra) => {
  return (dispatch, getState) => {
    const { respuesta } = getState().pregunta;
    dispatch({
      type: 'LETRA_SELECCIONADA',
      payload: letra || ''
    });
    let cant;
    if (letra) {
      const expresion = new RegExp(letra, 'g');
      cant = respuesta.toUpperCase().match(expresion).length;
    }
    dispatch(aumentarCantLetraCorrectasAction(cant));
  };
};

const optenerPreguntaAction = () => {
  return (dispatch, getState) => {
    const preguntas = getState().listadoPreguntasDelJuego;
    const index = Math.floor(Math.random() * Object.keys(preguntas).length);
    dispatch(seleccionarLetraAction());
    dispatch(actualizarCantLetraIncorrectas());
    dispatch({
      type: 'OBTENER_PREGUNTA',
      payload: preguntas[index]
    });
    dispatch(ganasteJuegoAction(false));
  };
};

const actualizarJuegosPerdidosAction = (perdidos) => {
  return {
    type: 'JUEGOS_PERDIDOS',
    payload: perdidos || 0
  };
};

const aumentarJuegosPerdidosAction = () => {
  return (dispatch, getState) => {
    const perdidos = getState().juegosPerdidos + 1;
    dispatch(actualizarJuegosPerdidosAction(perdidos));
  };
};

const aumentarCantidadLetrasIncorrectasAction = () => {
  return (dispatch, getState) => {
    const { cantLetraIncorrectas } = getState();
    if (cantLetraIncorrectas + 1 >= 6) {
      dispatch(aumentarJuegosPerdidosAction());
    }
    dispatch(actualizarCantLetraIncorrectas(cantLetraIncorrectas + 1));
  };
};

export {
  optenerPreguntaAction,
  seleccionarLetraAction,
  aumentarCantLetraCorrectasAction,
  ganasteJuegoAction,
  actualizarJuegosGanadosAction,
  aumentarJuegosGanadoAction,
  actualizarJuegosPerdidosAction,
  aumentarJuegosPerdidosAction,
  aumentarCantidadLetrasIncorrectasAction,
  actualizarListadoPreguntasDelJuegoAction
};
