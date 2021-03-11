import React from 'react';
import moment from 'moment';

import './styles.scss';

const MONTHS_INTERN = 10;
const FULLTIME_START_DATE = moment([2013, 8, 5, 9]).subtract(
  MONTHS_INTERN,
  'months'
); //August 5th, 9:00 AM

const AboutMe = () => {
  const timeInTech = Number(moment().diff(FULLTIME_START_DATE, 'years', true));
  const numYears = Math.round(timeInTech);

  const _numMonths = (timeInTech % numYears) * 12;
  const numMonths = Math.round(_numMonths);
  const numDays = Math.round((_numMonths % numMonths) * 365);
  debugger;

  return (
    <section className="about-me" id="one">
      <div className="about-me-content">
        <blockquote>
          “Screw the rules, I have <b>green hair</b>”
        </blockquote>
        <p>
          Hello World! My name is Karina Chow and I'm a swiss army knife.
          <br />
          What does that mean? Well I'm glad you asked.
          <br />
          This is what I've been doing in my last{' '}
          {`${numYears} years, ${numMonths} months, and ${numDays} days`} of
          working in tech:
          <ul className="about-me-lists">
            <List
              title="Developer"
              items={[
                'building webapps',
                'creating data visualizations',
                'making delightful CSS animations',
                'leading frontend infrastructure teams',
                'translating technical concepts to non-technical folk',
                'mentoring budding junior engineers',
                'designing FE interview processes',
                'advocating for web acessibility',
              ]}
              logos={[
                'js',
                'ts',
                'p5js',
                'react',
                'graphql',
                'html5',
                'css3',
                'gatsby',
                'python',
                'flask',
              ]}
            />
            <List
              title="Designer"
              items={[
                'creating wireframe UI designs',
                'making interactive prototype demos and videos for pitch meetings',
                'consulting with startups on their UX',
                'playing ambassador between design and engineering',
                'selecting colors, typography, and style for client branding',
                'developing product design systems from scratch',
                'illustrating for physical merchandise',
              ]}
              logos={[
                'figma',
                'sketch',
                'photoshop',
                'illustrator',
                'premiere',
              ]}
            />
            <List
              title="Entrepreneur"
              items={[
                'operating my own LLC',
                <>
                  running a{' '}
                  <a
                    href="https://www.redbubble.com/people/karinachowtime"
                    target="_blank"
                  >
                    RedBubble shop
                  </a>
                </>,
                'participating in venture competitions and startup hackathons',
              ]}
            />
            <List
              title="Crazy person"
              items={[
                'spending way too much time making this website',
              ]}
            />
          </ul>
          {/* If you got here from social media, you probably have seen the phrase */}
          {/* above. */}
        </p>
      </div>
    </section>
  );
};

const List = ({ title, items, logos }) => (
  <li>
    <b>{title}</b>
    <ul className="list-of-things">
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
    {logos && (
      <>
        <strong>Skills/Tools</strong>
        <ul className="list-of-tech">
          {logos.map(logo => (
            <li>
              <img
                src={`../images/logos/${logo}.png`}
                alt={`Logo for ${logo}`}
              />
            </li>
          ))}
        </ul>
      </>
    )}
  </li>
);

export default AboutMe;
