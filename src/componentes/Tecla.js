import React, { useCallback, useState } from 'react';
import propTypes from 'prop-types';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Letra from './Letra';
import {
  seleccionarLetraAction,
  aumentarCantidadLetrasIncorrectasAction
} from './actions/juegoActions';

const Tecla = ({ letra }) => {
  const [background, setBackground] = useState('white');
  const pregunta = useSelector((state) => state.pregunta);
  const dispatch = useDispatch();

  const onClick = useCallback(
    (l, respuesta) => {
      if (background === 'white') {
        if (respuesta.toLowerCase().includes(l.toLowerCase())) {
          setBackground('green');
          dispatch(seleccionarLetraAction(l));
        } else {
          dispatch(aumentarCantidadLetrasIncorrectasAction());
          setBackground('red');
        }
      }
    },
    [dispatch, background]
  );

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

Tecla.propTypes = {
  letra: propTypes.string.isRequired
};

export default React.memo(Tecla);
