import './styles.scss';

import React from 'react';

import Byline from './Byline';

import Scroll from '../Scroll';

import Bust from '../../assets/svgs/Bust';

const Hero = ({}) => {
  return (
    <div className="inner">
      <div className="bust-container"><Bust /></div>
      <div className="title-and-byline">
        <h1>karina chow</h1>
        <Byline />
      </div>
      <ul className="actions special">
        <li>
          <Scroll type="id" element="one">
            <a href="/#" className="button primary">
              Explore
            </a>
          </Scroll>
        </li>
      </ul>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </div>
  );
};

export default Hero;
