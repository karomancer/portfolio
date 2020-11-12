import React from 'react';

import Circuits from '../../sketches/Circuits';

interface Props {
  children: React.ReactNode;
}

const CircuitsHero = ({ children }: Props) => (
  <div className="circuits-hero">
    <Circuits />
    <h1>{children}</h1>
  </div>
);

export default CircuitsHero;
