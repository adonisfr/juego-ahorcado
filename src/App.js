import React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import Juego from './componentes/Juego';

function App() {
  return (
    <Row justify="center" className="app-juego-ahorcado">
      <Col xs={{ span: 24 }} lg={{ span: 20 }}>
        <Juego />
      </Col>
    </Row>
  );
}

export default App;
