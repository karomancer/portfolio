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
      <a href={shot.url}>
        <div className="shot-frame">
          <div className="dribbble-light"></div>
          <img src={shot.localCover.url} />
        </div>
        <h4 className="title">{shot.title}</h4>
      </a>
    </li>
  );
};

export default Shot;
