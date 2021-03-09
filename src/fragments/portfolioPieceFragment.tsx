import { graphql } from 'gatsby';

export const portfolioPieceFragment = graphql`
  fragment App__PortfolioPieceFragment on ContentfulPortfolioPiece {
    hero {
      description
      title
      fluid(quality: 100) {
        src
        aspectRatio
        sizes
        base64
        srcSet
        srcSetWebp
        srcWebp
      }
      fixed {
        src
        srcSet
        srcSetWebp
        srcWebp
        width
        height
        base64
        aspectRatio
      }
      file {
        contentType
        url
      }
    }
    date(formatString: "MMMM Do, YYYY")
    deliverables {
      title
      description
      file {
        contentType
        url
      }
      fluid {
        src
        aspectRatio
        sizes
        base64
        srcSet
        srcSetWebp
        srcWebp
      }
      fixed {
        src
        srcSet
        srcSetWebp
        srcWebp
        width
        height
        base64
        aspectRatio
      }
    }
    description {
      nodeType
      json
    }
    images {
      file {
        contentType
        url
      }
      fluid {
        src
        aspectRatio
        sizes
        base64
        srcSet
        srcSetWebp
        srcWebp
      }
      fixed {
        src
        srcSet
        srcSetWebp
        srcWebp
        width
        height
        base64
        aspectRatio
      }
      title
      description
    }
    thumbnail {
      file {
        url
      }
      fluid {
        src
        aspectRatio
        sizes
        base64
        srcSet
        srcSetWebp
        srcWebp
      }
      fixed {
        src
        srcSet
        srcSetWebp
        srcWebp
        width
        height
        base64
        aspectRatio
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
