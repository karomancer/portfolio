import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Shot from './Shot';

interface Props {
  showHeader?: boolean;
}

const Section = ({ showHeader }: Props) => {
  const {
    allDribbbleShot: { edges: allDribbbleShot },
  } = useStaticQuery(graphql`
    query DribbbleIndexQuery {
      allDribbbleShot(limit: 6) {
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
    <section className="dribbble-section">
      <div className="section-two-pane">
        {showHeader && (
          <div className="section-description">
            <span className="MoMa">MoMD</span>
            <h3><b>M</b>useum <b>o</b>f <b>M</b>odern <b>D</b>esigns</h3>
            <p>
              Designs I'm currently working on or have finished recently. If you'd like to see the graphic design work I've done for clients in the past, this is the place to look.
            </p>
            View on <a href="http://karomancer.dribbble.com/" target="_blank">Dribbble</a> or <a href="http://instagram.com/karomancer" target="_blank">Instagram</a>
          </div>
        )}
        <div className="portfolio-sections">
          <ul className="shots-desktop">
            {dribbbleShots.map(shot => (
              <Shot key={shot.url} shot={shot} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section;
