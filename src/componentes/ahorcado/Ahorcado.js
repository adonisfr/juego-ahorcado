import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Row } from 'antd';
import { connect } from 'react-redux';
import imagen from './img/horca1.svg';

const partesCuerpo = {
  1: 'g3845',
  2: 'path3847',
  3: 'rect3849',
  4: 'rect3851',
  5: 'rect3853',
  6: 'rect3855'
};

const Ahorcado = ({ cantLetraIncorrectas }) => {
  const [svgImg, setSvgImg] = useState({});

  useEffect(() => {
    document.getElementById('inkscape-drawing').addEventListener('load', function () {
      // eslint-disable-next-line react/no-this-in-sfc
      const doc = this.getSVGDocument();
      const tmp = { svg: doc };
      setSvgImg(tmp);
    });
  }, []);

  useEffect(() => {
    const mostrarParteCuerpo = (id, mostrar) => {
      const tmpArray = svgImg.svg.getElementById(id).getAttribute('style').toString().split(';');
      const style = tmpArray.reduce((obj, index) => {
        const tmp = index.split(':');
        return {
          ...obj,
          [tmp[0]]: tmp[1]
        };
      }, {});
      style.opacity = mostrar ? 1 : 0;
      const update = JSON.stringify(style).replace(/,/g, ';').replace(/"|}|{/g, '');
      svgImg.svg.getElementById(id).setAttribute('style', update);
    };
    if (svgImg.svg) {
      if (cantLetraIncorrectas > 0) {
        if (partesCuerpo && partesCuerpo[cantLetraIncorrectas]) {
          const id = partesCuerpo[cantLetraIncorrectas];
          mostrarParteCuerpo(id, true);
        }
      } else {
        const listaId = Object.values(partesCuerpo);
        listaId.forEach((id) => {
          mostrarParteCuerpo(id, false);
        });
      }
    }
  }, [svgImg.svg, cantLetraIncorrectas]);

  return (
    <Row justify="center" style={{ width: '100%' }}>
      <object id="inkscape-drawing" data={imagen} height="300" type="image/svg+xml">
        prueba
      </object>
    </Row>
  );
};

Ahorcado.propTypes = {
  cantLetraIncorrectas: propTypes.number
};

Ahorcado.defaultProps = {
  cantLetraIncorrectas: 0
};

const mapStateToProps = (state) => {
  return {
    cantLetraIncorrectas: state.cantLetraIncorrectas
  };
};

export default connect(mapStateToProps)(Ahorcado);
