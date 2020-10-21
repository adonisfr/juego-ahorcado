import React, { useMemo } from 'react';
import { Row, Col, Typography } from 'antd';
import { useSelector } from 'react-redux';
import NuevoJuegoBtn from './NuevoJuegoBtn';
import Teclado from './Teclado';

const { Title } = Typography;

const AreaTeclado = () => {
  const cantLetraIncorrectas = useSelector((state) => state.cantLetraIncorrectas);
  const ganaste = useSelector((state) => state.ganaste);

  const finJuego = useMemo(() => {
    return (
      <Row style={{ width: '100%' }}>
        <Col span={24}>
          <Row justify="center" align="bottom" style={{ width: '100%', height: 100, padding: 10 }}>
            <Title level={4} strong style={{ color: ganaste ? '#2E7D32' : '#c00000' }}>
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
    return <Teclado />;
  }

  return finJuego;
};

export default AreaTeclado;
