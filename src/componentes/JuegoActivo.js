import React, { useEffect } from 'react';
import { Row } from 'antd';
import { useDispatch } from 'react-redux';
import Palabra from './Respuesta';
import Pregunta from './Pregunta';

import { optenerPreguntaAction } from './actions/juegoActions';

const JuegoActivo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(optenerPreguntaAction());
  }, [dispatch]);

  return (
    <Row style={{ width: '100%', marginTop: 5 }}>
      <Palabra />
      <Pregunta />
    </Row>
  );
};

export default JuegoActivo;
