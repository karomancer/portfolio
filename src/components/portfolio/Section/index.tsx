import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Carousel from '../../Carousel';

import Shot from './Shot';

interface Props {
  showHeader?: boolean;
}

const Section = ({ showHeader }: Props) => {
  const {
    allDribbbleShot: { edges: allDribbbleShot },
  } = useStaticQuery(graphql`
    query PortfolioIndexQuery {
      allDribbbleShot(limit: 4) {
        edges {
          node {
            description
            title
            url
            updated(formatString: "MM/DD/YYYY")
            localCover {
              absolutePath
              relativePath
              url
            }
          }
        }
      }
    }
  `);

  const dribbbleShots = allDribbbleShot.map(shot => shot.node);

  return (
    <section className="portfolio" id="one">
      {showHeader && (
        <div className="section-header">
          <hr />
          <h1>Things I've Done</h1>
        </div>
      )}
      <div className="portfolio-sections">
        <ul className="shots-desktop">
          {dribbbleShots.map(shot => (
            <Shot key={shot.url} shot={shot} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section;
