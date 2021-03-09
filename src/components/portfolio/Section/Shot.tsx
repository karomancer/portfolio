import React from 'react';

import './styles.scss';

type Asset = {
  absolutePath: string;
  relativePath: string;
  url: string;
};

type Shot = {
  url: string;
  localCover: Asset;
  title: string;
  updated: string;
};

interface Props {
  shot: Shot;
  // shot: PortfolioPiece;
}

const Shot = ({ shot }: Props) => {
  return (
    <li className="dribbble-shot">
      <div className="dribbble-light"></div>
      <a href={shot.url}>
        <img src={shot.localCover.url} />
      </a>
      <h4 className="title">
        {shot.title} 
      </h4>
    </li>
  );
};

export default Shot;
