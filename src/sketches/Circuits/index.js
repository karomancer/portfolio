import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'
import p5 from 'p5';

import Circuit from './Circuit';

/**
 * Class below
 */

const GRAY_RGB = [255, 255, 255];

const CIRCUITS_DIVISIBLE = 200000;
const MODULO = 200;

const Circuits = ({ width, height }) => {
  const circuitsEl = useRef();
  let circuitId = 0;

  const sketch = p => {
    const circuits = [];

    p.setup = () => {
      p.createCanvas(width || p.windowWidth, height || p.windowHeight);
      p.background(GRAY_RGB);
    };

    p.draw = () => {
      const num = Math.round(p.random(MODULO));

      if (
        num % MODULO === 0 &&
        circuits.length < Math.ceil((p.width * p.height) / CIRCUITS_DIVISIBLE)
      ) {
        const circuit = new Circuit(p, circuitId++);
        circuits.push(circuit);
      }

      for (let i = 0; i < circuits.length; i++) {
        circuits[i].draw();
      }
    };
  };

  useEffect(() => {
    new p5(sketch, circuitsEl.current);
  }, []);

  return <div id="circuits" ref={circuitsEl}></div>;
};

Circuits.propTypes = {
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default Circuits;
