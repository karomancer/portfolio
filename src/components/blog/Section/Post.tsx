import React from 'react';
import { Link } from 'gatsby';

import RichText from '../../richtext';

import './styles.scss';

import { PortfolioPiece } from './types';

interface Props {
  piece: PortfolioPiece;
}

const Post = ({ piece }: Props) => {
  return (
    <li className="blog-post">
      <img src={piece.thumbnail.file.url} />
      <div className="post-content">
        <span className="post-date">{piece.date}</span>
        <span className="piece-type" data-key={piece.type.toLowerCase()}>{piece.type}</span>
        <h4>{piece.title}</h4>
        {piece?.description?.raw && (
          <RichText plainText document={{ json: JSON.parse(piece.description.raw) }} />
        )}
        <Link to={`/portfolio/${piece.slug}`}>Read more</Link>
      </div>
    </li>
  );
};

export default Post;
