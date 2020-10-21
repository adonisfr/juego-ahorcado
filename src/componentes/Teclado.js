import React from 'react';
import { Col, Row } from 'antd';
import Tecla from './Tecla';

const Teclado = () => {
  const alphabet = () => {
    const letras = ['A', 'Z'];
    const array = [];
    for (let i = letras[0].charCodeAt(); i <= letras[1].charCodeAt(); i += 1) {
      array.push(String.fromCharCode(i));
    }
    return array;
  };

  return (
    <Row style={{ width: '100%' }} justify="center">
      <Col
        xs={{ span: 24 }}
        lg={{ span: 18 }}
        style={{ backgroundColor: '#494846', borderRadius: 10 }}
      >
        <Row justify="center">
          {alphabet().map((l) => {
            return <Tecla key={l} letra={l} />;
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default React.memo(Teclado);
