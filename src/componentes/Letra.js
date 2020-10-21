import React from 'react';
import propTypes from 'prop-types';
import { Typography } from 'antd';

const { Text } = Typography;

const Letra = ({ letra, color }) => {
  return (
    <div className="estilo-letra">
      <Text strong>
        <span style={{ color }}>{letra}</span>
      </Text>
    </div>
  );
};

Letra.propTypes = {
  letra: propTypes.string,
  color: propTypes.string
};

Letra.defaultProps = {
  letra: '',
  color: ''
};

export default React.memo(Letra);
