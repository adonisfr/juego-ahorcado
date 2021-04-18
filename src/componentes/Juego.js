import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import BarraPuntuacion from './BarraPuntuacion';
import AreaTeclado from './AreaTeclado';
import Ahorcado from './ahorcado/Ahorcado';
import JuegoActivo from './JuegoActivo';
import ResumenJuego from './ResumenJuego';

const Juego = () => {
  const listadoPreguntasDelJuego = useSelector((state) => state.listadoPreguntasDelJuego);

  return (
    <Row className="contenedor-juego-ahorcado">
      {listadoPreguntasDelJuego.length > 0 ? (
        <Row style={{width:'100%'}}>
          <Row style={{ width: '100%', marginTop: 10 }} justify="center">
            <Col span={12} flex={2}>
              <BarraPuntuacion />
            </Col>
          </Row>
          <Row align="middle" style={{ width: '100%', height: 300 }}>
            <Col span={12}>
              <AreaTeclado />
            </Col>
            <Col span={12} style={{ paddingTop: 15 }}>
              <Ahorcado />
            </Col>
          </Row>
          <JuegoActivo />
        </Row>
      ) : (
        <ResumenJuego />
      )}
    </Row>
  );
};

export default Juego;
