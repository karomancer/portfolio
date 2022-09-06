import React from 'react';

import './styles.scss';

type Image = {
  fullImage: string;
  twoX: string;
  thumbnail: string;
  teaser: string;
}

type Shot = {
  title: string;
  description: string;
  updatedAt: string;
  images: Image;
  url: string;
};

interface Props {
  shot: Shot;
  // shot: PortfolioPiece;
}

const Shot = ({ shot }: Props) => {
  return (
    <li className="dribbble-shot">
      <a href={shot.url} target="_blank">
        <div className="shot-frame">
          <div className="dribbble-light"></div>
          <img src={shot.images.thumbnail} />
        </div>
        <h4 className="title">{shot.title}</h4>
      </a>
    </li>
  );
};

export default Shot;
