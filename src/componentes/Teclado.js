import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { Row, Col, Typography } from 'antd';
import { connect } from 'react-redux';
import LetraTeclado from './LetraTeclado';
import NuevoJuegoBtn from './NuevoJuegoBtn';

const { Title } = Typography;

const Teclado = ({ cantLetraIncorrectas, ganaste }) => {
  const alphabet = () => {
    const letras = ['A', 'Z'];
    const array = [];
    for (let i = letras[0].charCodeAt(); i <= letras[1].charCodeAt(); i += 1) {
      array.push(String.fromCharCode(i));
    }
    return array;
  };

  const finJuego = useMemo(() => {
    return (
      <Row style={{ width: '100%' }}>
        <Col span={24}>
          <Row
            justify="center"
            align="bottom"
            style={{ width: '100%', height: 100, padding: 10 }}
          >
            <Title
              level={4}
              strong
              style={{ color: ganaste ? '#2E7D32' : '#c00000' }}
            >
              Has {ganaste ? 'ganado' : 'perdido'}
            </Title>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify="center" align="top" style={{ width: '100%' }}>
            <NuevoJuegoBtn />
          </Row>
        </Col>
      </Row>
    );
  }, [ganaste]);

  if (ganaste) {
    return finJuego;
  }

  if (cantLetraIncorrectas >= 0 && cantLetraIncorrectas < 6) {
    return (
      <Row style={{ width: '100%' }} justify="center">
        <Col
          xs={{ span: 24 }}
          lg={{ span: 18 }}
          style={{ backgroundColor: '#494846', borderRadius: 10 }}
        >
          <Row justify="center">
            {alphabet().map(l => {
              return <LetraTeclado key={l} letra={l} />;
            })}
          </Row>
        </Col>
      </Row>
    );
  }

  return finJuego;
};

Teclado.propTypes = {
  cantLetraIncorrectas: propTypes.number,
  ganaste: propTypes.bool
};

Teclado.defaultProps = {
  cantLetraIncorrectas: 0,
  ganaste: false
};

const mapStateToProps = state => {
  return {
    cantLetraIncorrectas: state.cantLetraIncorrectas,
    ganaste: state.ganaste
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Teclado);
