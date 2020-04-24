import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Row } from 'antd';
import { connect } from 'react-redux';
import Palabra from './Respuesta';
import Pregunta from './Pregunta';

import { optenerPreguntaAction } from './actions/juegoActions';

const JuegoActivo = ({ optenerPregunta }) => {
  useEffect(() => {
    optenerPregunta();
  }, []);

  return (
    <Row style={{ width: '100%', marginTop: 5 }}>
      <Palabra />
      <Pregunta />
    </Row>
  );
};

JuegoActivo.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(JuegoActivo);
