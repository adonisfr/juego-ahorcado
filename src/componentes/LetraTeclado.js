import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Card } from 'antd';
import { connect } from 'react-redux';
import Letra from './Letra';
import {
  seleccionarLetraAction,
  actualizarCantLetraIncorrectasAction,
  aumentarJuegosPerdidosAction
} from './actions/juegoActions';

const LetraTeclado = ({
  letra,
  seleccionarLetra,
  cantLetraIncorrectas,
  actualizarCantLetraIncorrectas,
  pregunta,
  aumentarJuegosPerdidos
}) => {
  const [background, setBackground] = useState('white');

  useEffect(() => {
    if (cantLetraIncorrectas >= 6) {
      setBackground('white');
    }
  }, [cantLetraIncorrectas]);

  const onClick = (l, respuesta) => {
    if (respuesta.toLowerCase().includes(l.toLowerCase())) {
      setBackground('green');
      seleccionarLetra(l);
    } else {
      if (cantLetraIncorrectas + 1 >= 6) {
        aumentarJuegosPerdidos();
      }
      actualizarCantLetraIncorrectas(cantLetraIncorrectas + 1);
      setBackground('red');
    }
  };

  return (
    <Card
      onClick={() => onClick(letra, pregunta.respuesta)}
      hoverable
      bodyStyle={{ padding: '8px 2px 2px 2px', backgroundColor: background }}
      style={{ margin: 5 }}
    >
      <Letra letra={letra} />
    </Card>
  );
};

LetraTeclado.propTypes = {
  letra: propTypes.string.isRequired,
  cantLetraIncorrectas: propTypes.number,
  seleccionarLetra: propTypes.func.isRequired,
  pregunta: propTypes.shape({
    pregunta: propTypes.string,
    respuesta: propTypes.string
  }).isRequired,
  actualizarCantLetraIncorrectas: propTypes.func.isRequired,
  aumentarJuegosPerdidos: propTypes.func.isRequired
};

LetraTeclado.defaultProps = {
  cantLetraIncorrectas: 0
};

const mapStateToProps = state => {
  return {
    cantLetraIncorrectas: state.cantLetraIncorrectas,
    pregunta: state.pregunta
  };
};

const mapDispatchToProps = dispatch => {
  return {
    seleccionarLetra(letra) {
      dispatch(seleccionarLetraAction(letra));
    },
    actualizarCantLetraIncorrectas(cantidad) {
      dispatch(actualizarCantLetraIncorrectasAction(cantidad));
    },
    aumentarJuegosPerdidos() {
      dispatch(aumentarJuegosPerdidosAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LetraTeclado);
