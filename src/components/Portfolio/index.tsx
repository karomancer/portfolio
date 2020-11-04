import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Portfolio = () => {
  const { allContentfulPortfolioPiece: { nodes: portfolioPieces } } = useStaticQuery(graphql`
    query PortfolioIndexQuery {
      allContentfulPortfolioPiece(sort: { fields: type, order: ASC }) {
        nodes {
          hero {
            description
            title
          }
          date(formatString: "MM/YYYY")
          deliverables {
            title
            description
            file {
              contentType
              url
            }
          }
          description {
            description
          }
          images {
            file {
              url
            }
            title
            description
          }
          type
          title
          slug
          role
        }
      }
    }
  `);

  console.log(portfolioPieces);

  return null;
};

export default Portfolio;
