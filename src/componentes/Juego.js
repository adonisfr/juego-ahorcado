import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import BarraPuntuacion from './BarraPuntuacion';
import Teclado from './Teclado';
import Ahorcado from './ahorcado/Ahorcado';
import JuegoActivo from './JuegoActivo';

const Juego = () => {
  return (
    <Row className="contenedor-juego-ahorcado">
      <Row style={{ width: '100%', marginTop: 10 }} justify="center">
        <Col span={12} flex={2}>
          <BarraPuntuacion />
        </Col>
      </Row>
      <Row align="middle" style={{ width: '100%', height: 300 }}>
        <Col span={12}>
          <Teclado />
        </Col>
        <Col span={12} style={{ paddingTop: 15 }}>
          <Ahorcado />
        </Col>
      </Row>
      <JuegoActivo />
    </Row>
  );
};

export default connect()(Juego);
