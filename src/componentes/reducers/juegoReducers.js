const pregunta = (state = { pregunta: '', respuesta: '' }, action) => {
  switch (action.type) {
    case 'OBTENER_PREGUNTA':
      return action.payload;
    default:
      return state;
  }
};

const letraSeleccionada = (state = '', action) => {
  switch (action.type) {
    case 'LETRA_SELECCIONADA':
      return action.payload;
    default:
      return state;
  }
};

const cantLetraIncorrectas = (state = 0, action) => {
  switch (action.type) {
    case 'CANTIDAD_LETRAS_INCORRECTAS':
      return action.payload;
    default:
      return state;
  }
};

const cantLetraCorrectas = (state = 0, action) => {
  switch (action.type) {
    case 'CANTIDAD_LETRAS_CORRECTAS':
      return action.payload;
    default:
      return state;
  }
};

const ganaste = (state = false, action) => {
  switch (action.type) {
    case 'GANASTE':
      return action.payload;
    default:
      return state;
  }
};

const juegosGanados = (state = 0, action) => {
  switch (action.type) {
    case 'JUEGOS_GANADOS':
      return action.payload;
    default:
      return state;
  }
};

const juegosPerdidos = (state = 0, action) => {
  switch (action.type) {
    case 'JUEGOS_PERDIDOS':
      return action.payload;
    default:
      return state;
  }
};

export {
  pregunta,
  letraSeleccionada,
  cantLetraIncorrectas,
  cantLetraCorrectas,
  ganaste,
  juegosGanados,
  juegosPerdidos
};
