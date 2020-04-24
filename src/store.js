import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

import {
  pregunta,
  letraSeleccionada,
  cantLetraIncorrectas,
  cantLetraCorrectas,
  ganaste,
  juegosGanados,
  juegosPerdidos
} from './componentes/reducers/juegoReducers';

export default createStore(
  combineReducers({
    pregunta,
    letraSeleccionada,
    cantLetraIncorrectas,
    cantLetraCorrectas,
    ganaste,
    juegosGanados,
    juegosPerdidos
  }),
  applyMiddleware(reduxThunk)
);
