import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Letra from './Letra';
import { actualizarCantLetraCorrectasAction } from './actions/juegoActions';

const LetraIncognita = ({
  letra,
  letraSeleccionada,
  actualizarCantLetraCorrectas
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (letraSeleccionada !== '') {
      if (letraSeleccionada.toLowerCase() === letra.toLowerCase()) {
        setVisible(true);
        actualizarCantLetraCorrectas(1);
      }
    } else {
      setVisible(false);
    }
  }, [letra, letraSeleccionada]);

  return (
    <div style={{ margin: 10 }}>
      {visible ? (
        <Letra letra={letra.toUpperCase()} color="#fafafa" />
      ) : (
        <span style={{ color: '#fafafa' }}>___</span>
      )}
    </div>
  );
};

LetraIncognita.propTypes = {
  letra: propTypes.string.isRequired,
  letraSeleccionada: propTypes.string,
  actualizarCantLetraCorrectas: propTypes.func.isRequired
};

LetraIncognita.defaultProps = {
  letraSeleccionada: ''
};

const mapStateToProps = state => {
  return {
    letraSeleccionada: state.letraSeleccionada
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actualizarCantLetraCorrectas(cantidad) {
      dispatch(actualizarCantLetraCorrectasAction(cantidad));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LetraIncognita);
