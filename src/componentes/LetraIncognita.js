import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Letra from './Letra';

const LetraIncognita = ({ letra }) => {
  const [visible, setVisible] = useState(false);
  const letraSeleccionada = useSelector((state) => state.letraSeleccionada);

  useEffect(() => {
    if (letraSeleccionada !== '') {
      if (letraSeleccionada.toLowerCase() === letra.toLowerCase()) {
        setVisible(true);
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
  letra: propTypes.string.isRequired
};

export default React.memo(LetraIncognita);
