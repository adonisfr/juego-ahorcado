import React from 'react';
import propTypes from 'prop-types';
import { Col, Row, Card, Typography, Tag } from 'antd';
import { connect } from 'react-redux';
import bg from './img/bg-header.png';

const { Text } = Typography;

const BarraPuntuacion = ({ juegosPerdidos, juegosGanados }) => {
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
        <Col span={24}>
          <Row>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Text strong>
                <span className="color-de-texto">Ganados</span>
              </Text>
            </Col>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Text strong>
                <span className="color-de-texto">Perdidos</span>
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Text strong>
                <Tag>{juegosGanados}</Tag>
              </Text>
            </Col>
            <Col span={12} style={{ textAlign: 'center' }}>
              <Text strong>
                <Tag>{juegosPerdidos}</Tag>
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

BarraPuntuacion.propTypes = {
  juegosPerdidos: propTypes.number,
  juegosGanados: propTypes.number
};

BarraPuntuacion.defaultProps = {
  juegosPerdidos: 0,
  juegosGanados: 0
};

const mapStateToProps = state => {
  return {
    juegosPerdidos: state.juegosPerdidos,
    juegosGanados: state.juegosGanados
  };
};

export default connect(mapStateToProps)(BarraPuntuacion);
