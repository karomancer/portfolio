import React from 'react';
import { graphql, Link } from 'gatsby';

import { PortfolioPiece as PortfolioPieceType } from '../components/portfolio/types';
import PortfolioPiecePage from '../components/portfolio/page';
import Layout from '../components/Layout';

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
      <Layout>
        <section className="wrapper">
          <PortfolioPiecePage piece={piece} />
        </section>
      </Layout>
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
