import React from 'react';
import { Col, Row, Typography } from 'antd';
import { useSelector } from 'react-redux';
import Puntuacion from './Puntuacion';
import ReiniciarJuego from './ReiniciarJuego';

const { Text } = Typography;

const color = 'white';

const ResumenJuego = () => {
  const juegosGanados = useSelector((state) => state.juegosGanados);
  const juegosPerdidos = useSelector((state) => state.juegosPerdidos);

  return (
    <Row style={{ width: '100%', minHeight: '35vh', padding: 10 }}>
      <Col span={24}>
        <Row justify="center">
          <Text strong style={{ color, fontSize: 24 }}>
            RESUMEN DEL JUEGO
          </Text>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center">
          <Text strong style={{ color }}>
            NÚMERO DE INTENTOS
          </Text>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center">
          <Puntuacion puntuacion={juegosGanados + juegosPerdidos} />
        </Row>
      </Col>
      <Col span={12}>
        <Row justify="center">
          <Text strong style={{ color }}>
            GANADOS
          </Text>
        </Row>
        <Row justify="center">
          <Puntuacion puntuacion={juegosGanados} />
        </Row>
      </Col>
      <Col span={12}>
        <Row justify="center">
          <Text strong style={{ color }}>
            PERDIDOS
          </Text>
        </Row>
        <Row justify="center">
          <Puntuacion puntuacion={juegosPerdidos} />
        </Row>{' '}
      </Col>
      <Col span={24}>
        <Row justify="center">
          <ReiniciarJuego />
        </Row>
      </Col>
    </Row>
  );
};

export default ResumenJuego;
