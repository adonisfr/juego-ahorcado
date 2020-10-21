import React, { useMemo } from 'react';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import LetraIncognita from './LetraIncognita';

const Respuesta = () => {
  const respuesta = useSelector((state) => state.pregunta.respuesta);

  const listadoCaracteres = useMemo(() => {
    return respuesta ? respuesta.split('') : [];
  }, [respuesta]);
  return (
    <Row style={{ width: '100%' }} justify="center">
      {listadoCaracteres.map((letra, index) => {
        const key = `${letra}${index}`;
        return <LetraIncognita key={key} letra={letra} />;
      })}
    </Row>
  );
};

export default Respuesta;
