import './styles.scss';
import React from 'react';

import Byline from './Byline';

import Scroll from '../Scroll';

import Circuits from '../../sketches/Circuits';
import Bust from '../../assets/svgs/Bust';

const Hero = ({}) => {
  return (
    <>
      <Circuits />
      <section id="banner">
        <div className="inner">
          <div className="bust-container">
            <Bust />
          </div>
          <div className="title-and-byline">
            <h1>karina chow</h1>
            <Byline />
          </div>
          <Scroll type="id" element="one">
            <a href="#one" className="more">
              Learn More
            </a>
          </Scroll>
        </div>
      </section>
    </>
  );
};

export default Hero;
