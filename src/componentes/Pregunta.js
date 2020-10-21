import React from 'react';
import { Row, Typography } from 'antd';
import { useSelector } from 'react-redux';

const { Text } = Typography;

const Pregunta = () => {
  const pregunta = useSelector((state) => state.pregunta);
  return (
    <Row align="middle" style={{ width: '100%', height: 50 }} justify="center">
      <Text strong>
        <span className="color-de-texto">{pregunta.pregunta}</span>
      </Text>
    </Row>
  );
};

export default Pregunta;
