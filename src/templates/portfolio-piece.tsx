import React from 'react';
import { graphql } from 'gatsby';

import { PortfolioPiece as PortfolioPieceType } from '../components/portfolio/types';
import PortfolioPiecePage from '../components/portfolio/page';

interface PortfolioPieceTemplateProps {
  data: {
    contentfulPortfolioPiece: PortfolioPieceType;
  };
}

class PortfolioPieceTemplate extends React.Component<
  PortfolioPieceTemplateProps
> {
  render() {
    const piece = this.props?.data?.contentfulPortfolioPiece;

    return (
      <section className="wrapper">
        <PortfolioPiecePage piece={piece} />
      </section>
    );
  }
}

export const pageQuery = graphql`
  query PortfolioPieceBySlug($slug: String!) {
    contentfulPortfolioPiece(slug: { eq: $slug }) {
      ...App__PortfolioPieceFragment
    }
  }
`;

export default PortfolioPieceTemplate;
