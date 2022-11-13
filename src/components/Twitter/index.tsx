import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Tweets from './sketch';
import "./styles.scss";

interface Props {
  showHeader?: boolean;
  pieces?: object[]
}

const Twitter = ({ showHeader, pieces }: Props) => {
  const {
    allTwitterStatusesUserTimelineKaromancer: { nodes: tweets },
  } = useStaticQuery(graphql`
    query TwitterSectionQuery {
      allTwitterStatusesUserTimelineKaromancer(
        limit: 20
        sort: { fields: [created_at], order: [ASC] }
        filter: {full_text: {ne: ""}}
      ) {
        nodes {
          id
          created_at
          full_text
          retweet_count
          favorite_count
          entities {
            media {
              media_url
              type
            }
          }
        }
      }
    }
  `);

  return (
    <section className="twitter">
      <Tweets tweets={tweets} />
      <p className="view-more-twitter">View more on <a href="https://www.twitter.com/karomancer">Twitter</a></p>
    </section>
  );
};

export default Twitter;
