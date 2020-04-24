import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { Row } from 'antd';
import { connect } from 'react-redux';
import { uuid } from 'uuidv4';
import LetraIncognita from './LetraIncognita';

const Respuesta = ({ respuesta }) => {
  const listadoCaracteres = useMemo(() => {
    return respuesta ? respuesta.split('') : [];
  }, [respuesta]);
  return (
    <Row style={{ width: '100%' }} justify="center">
      {listadoCaracteres.map(letra => (
        <LetraIncognita key={uuid()} letra={letra} />
      ))}
    </Row>
  );
};

Respuesta.propTypes = {
  respuesta: propTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    respuesta: state.pregunta.respuesta
  };
};

export default connect(mapStateToProps)(Respuesta);
