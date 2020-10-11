import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

import Circuit from './Circuit'

const GRAY_RGB = [234, 234, 234];

// const DARK_TEAL_RGB = [69, 156, 131];
// const DARK_TEAL_HEX = '#459c83';

// const TEAL_HEX = '#51b39a';

const CIRCUITS_DIVISIBLE = 100000;
const MODULO = 200;



const Circuits = ({children}) => {
  const circuitsEl = useRef();
  let circuitId = 0;

  const sketch = p => {
    const circuits = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.background(GRAY_RGB);
      // p.background(100, 100, 100);
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
      // p.line(30, 20, 85, 20);
      // p.stroke(126);
      // p.line(85, 20, 85, 75);
      // p.stroke(255);
      // p.line(85, 75, 30, 75);
    };
  };

  useEffect(() => {
    new p5(sketch, circuitsEl.current);
  }, []);

  return <div id="circuits" ref={circuitsEl}>{children}</div>;
};

export default Circuits;
