import React from 'react';
import { differenceInYears, differenceInMonths, differenceInDays, subMonths, getDaysInMonth } from 'date-fns'

import './styles.scss';

const MONTHS_INTERN = 10;
const FULLTIME_START_DATE = subMonths(new Date(2013, 8, 5, 9), MONTHS_INTERN)

const AboutMe = () => {
  const today = new Date()

  const numYears = differenceInYears(today, FULLTIME_START_DATE);
  const numMonths = differenceInMonths(today, FULLTIME_START_DATE) % 12
  const numDays = ((differenceInDays(today, FULLTIME_START_DATE) % 365) - numMonths * 30) % getDaysInMonth(today)

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
          {`${numYears} years, ${numMonths > 0 && `${(numDays > 30 ? numMonths + 1 : numMonths)} month${numMonths !== 1 ? 's' : ''},`} and ${numDays} day${numDays !== 1 ? 's' : ''}`} of
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
