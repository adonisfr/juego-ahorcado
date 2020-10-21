import React from 'react';
import { Col, Row, Card, Typography } from 'antd';
import bg from './img/bg-header.png';
import Ganados from './Ganados';
import Perdidos from './Perdidos';

const { Text } = Typography;

const BarraPuntuacion = () => {
  return (
    <Card
      bodyStyle={{
        padding: 5,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'repeat'
      }}
      bordered={false}
    >
      <Row justify="center" className="barra-puntuacion">
        <Col span={12}>
          <Row justify="center">
            <Text strong>
              <span className="color-de-texto">Ganados</span>
            </Text>
          </Row>
          <Row justify="center">
            <Ganados />
          </Row>
        </Col>
        <Col span={12}>
          <Row justify="center">
            <Text strong>
              <span className="color-de-texto">Perdidos</span>
            </Text>
          </Row>
          <Row justify="center">
            <Perdidos />
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default BarraPuntuacion;
