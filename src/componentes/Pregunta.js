import React from 'react';
import propTypes from 'prop-types';
import { Row, Typography } from 'antd';
import { connect } from 'react-redux';

const { Text } = Typography;

const Pregunta = ({ pregunta }) => {
  return (
    <Row align="middle" style={{ width: '100%', height: 50 }} justify="center">
      <Text strong>
        <span className="color-de-texto">{pregunta.pregunta}</span>
      </Text>
    </Row>
  );
};

Pregunta.propTypes = {
  pregunta: propTypes.shape({
    pregunta: propTypes.string,
    respuesta: propTypes.string
  }).isRequired
};

const mapStateToProps = state => {
  return {
    pregunta: state.pregunta
  };
};

export default connect(mapStateToProps)(Pregunta);
