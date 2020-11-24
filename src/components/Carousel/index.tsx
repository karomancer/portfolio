import './styles.scss';

import React from 'react';

const Carousel = ({ children }) => {
  return (
    <div className="carousel">
      <ul>{children}</ul>
    </div>
  );
};

export default Carousel;
