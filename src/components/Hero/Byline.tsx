import React, { useEffect, useRef, useState } from 'react';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzαβΓΔδεζηθικΛλμνΞξΠπρΣσςτυΦφχΨψΩω';
const BYLINE_OPTIONS = [
  'senior frontend engineer',
  'freelance graphic designer',
  'user experience nerd',
  'web accessibility advocate',
  'creative coder',
  'amateur cosplayer',
  'aspiring installation artist',
  'energetic aikidoka',
  'video & board game geek',
  'funky saxophonista',
  'animation enthusiast',
  'jack of all trades',
  'are you still there?',
];

const Byline = () => {
  const bylineEl = useRef();
  const getRandomIndex = len => Math.floor(Math.random() * len);
  const getRandomLetter = () => ALPHABET[getRandomIndex(ALPHABET.length)];

  // @ts-ignore
  const setByline = newByline => (bylineEl.current.innerText = newByline); 

  let timeout;
  let bylineIndex = 0;
  let byline = BYLINE_OPTIONS[bylineIndex];

  const changeByline = () => {
    bylineIndex =
      bylineIndex + 1 == BYLINE_OPTIONS.length ? 0 : bylineIndex + 1;

    const bylineArray = byline.split('');
    const newByline = BYLINE_OPTIONS[bylineIndex];
    const newBylineArray = newByline.split('');

    if (newBylineArray.length > bylineArray.length) {
      let numNewItems = newBylineArray.length - bylineArray.length;
      while (numNewItems > 0) {
        bylineArray.push('');
        numNewItems--;

        if (numNewItems > 0) {
          bylineArray.unshift('');
          numNewItems--;
        }
      }
    }

    const length = bylineArray.length;
    const midpoint = Math.floor(length / 2);

    byline = newByline;

    const scrambleIndex = (index, times) => {
      setTimeout(() => {
        if (times < 5) {
          bylineArray[index] =
            newBylineArray[index] !== ' ' ? getRandomLetter() : ' ';
          setByline(bylineArray.join(''));
          scrambleIndex(index, ++times);
        } else {
          bylineArray[index] = newBylineArray[index];
          setByline(bylineArray.join(''));
        }
      }, 80);
    };

    const indexArray = bylineArray.map((_, i) => i);

    const scrambleRandomLetters = (index, indices) => {
      setTimeout(() => {
        const indicesLeft = indices.length;
        const i = getRandomIndex(indicesLeft);

        if (indices.length > 0) {
          scrambleIndex(indices[i], 0);
          indices.splice(i, 1);
          scrambleRandomLetters(index, indices);
        } else {
          clearTimeout(timeout);
          timeout = setTimeout(changeByline, 1800);
        }
      }, 400);
    };

    scrambleRandomLetters(getRandomIndex(length), indexArray);
    scrambleRandomLetters(getRandomIndex(length), indexArray);
    scrambleRandomLetters(getRandomIndex(length), indexArray);
  };

  useEffect(() => {
    setTimeout(changeByline, 2800);
  });

  return <h3 ref={bylineEl}>{byline}</h3>;
};

export default Byline;
