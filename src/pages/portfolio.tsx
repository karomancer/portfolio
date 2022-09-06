import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import CircuitsHero from '../components/CircuitsHero';
import PortfolioSection from '../components/portfolio/Section';


const PortfolioPage = ({ data }) => {
  const {
    allContentfulPortfolioPiece: { nodes: portfolioPieces },
  } = data;

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Karina Chow</title>
      </Helmet>
      <div className="page">
        <CircuitsHero>Things I've Done</CircuitsHero>
        <PortfolioSection pieces={portfolioPieces} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query BlogIndexQuery {
    allContentfulPortfolioPiece(
      sort: { fields: [date, title], order: [DESC, ASC] }
    ) {
      nodes {
        ...App__PortfolioPieceFragment
      }
    }
  }
`;

export default PortfolioPage;