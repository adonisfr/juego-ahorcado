import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { optenerPreguntaAction } from './actions/juegoActions';

const NuevoJuegoBtn = ({ optenerPregunta }) => {
  const reiniciar = () => {
    optenerPregunta();
  };
  return (
    <Button type="default" onClick={reiniciar}>
      Nuevo juego
    </Button>
  );
};

NuevoJuegoBtn.propTypes = {
  optenerPregunta: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    optenerPregunta() {
      dispatch(optenerPreguntaAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NuevoJuegoBtn);
