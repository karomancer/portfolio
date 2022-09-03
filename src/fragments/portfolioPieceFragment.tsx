import { graphql } from 'gatsby';

export const portfolioPieceFragment = graphql`
  fragment App__PortfolioPieceFragment on ContentfulPortfolioPiece {
    hero {
      description
      title
      url
    }
    date(formatString: "MMMM Do, YYYY")
    description {
      raw
      references {
        ... on ContentfulAsset {
          __typename
          id
          contentful_id
          title
          url
          file {
            contentType
            url
          }
        }
      }
    }
    deliverables {
      title
      description
      file {
        contentType
        url
      }
    }
    images {
      file {
        contentType
        url
      }
      title
      description
    }
    thumbnail {
      file {
        url
      }
      title
      description
    }
    hex
    type
    title    
    slug
    role
  }
`;
