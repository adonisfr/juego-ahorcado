import React from 'react';
import propTypes from 'prop-types';
import { Tag, Typography } from 'antd';

const { Text } = Typography;

const Puntuacion = ({ puntuacion }) => {
  return (
    <Text strong>
      <Tag>{puntuacion}</Tag>
    </Text>
  );
};

Puntuacion.propTypes = {
  puntuacion: propTypes.number
};

Puntuacion.defaultProps = {
  puntuacion: null
};

export default Puntuacion;
