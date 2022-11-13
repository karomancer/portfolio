import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import p5 from 'p5';

/**
 * Class below
 */

const Tweets = ({ width, height, tweets }) => {
  const tweetsEl = useRef();

  const EASING = 0.001;

  const sketch = (p) => {
    let cloudCoords = [];
    let timer = 0;

    let tweetIndex = 0;

    const drawCloud = ({ cx, cy, nums, w, h, minX, minY }, index) => {
      p.fill('white');

      for (let i = 0; i < w + h; i++) {
        const [xOffset, yOffset, size] = nums[i];
        p.circle(
          cx + xOffset + p.random(-0.5, 0.5),
          cy + yOffset + p.random(-0.5, 0.5),
          size + p.random(-1, 1)
        );
      }

      p.textFont("futura-pt");
      p.fill('#111111');
      p.textSize(16);
      p.textAlign(p.CENTER);
      p.text(
        tweets[index]?.full_text,
        cx + minX + 10 + p.random(-0.2, 0.2),
        cy - h + p.random(-0.2, 0.2),
        w * 2 - 20
      );
    };

    p.setup = () => {
      let width = width || p.windowWidth;
      let height = height || p.windowHeight;

      p.createCanvas(width, height);
      p.background('#87ceeb');
      
      
      for (let i = 0; i < tweets.length; i++) {
        const tweetLength = tweets[i].full_text.length;
        const isEven = i % 2 === 0;
        const isThirds = i % 3 === 0;
        const x = isEven ? p.random(200, width / 2 - 100) : p.random(width/2 + 100, width - 200);
        const y = isThirds ? p.random(200, height/2 - 100) : p.random(height/2 + 100, height - 100);
        const w =
          tweetLength > 100 ? p.min(tweetLength * 1.25, 250) : tweetLength;
        const h = tweetLength > 100 ? tweetLength * 0.37 : p.min(tweetLength, 100);
        cloudCoords[i] = { cx: x, cy: y, nums: [], w, h, count: 1, timer: 0 };

        let minX = x;
        for (let j = 0; j < w + h; j++) {
          let xOffset = p.random(-w, w);
          let yOffset = p.random(-h, h);
          let size = p.random(60, 100);
          let dir = [-1, p.random(-1, 1)];
          if (xOffset < minX) {
            minX = xOffset;
          }
          cloudCoords[i].nums.push([xOffset, yOffset, size, dir]);
        }
        cloudCoords[i] = { ...cloudCoords[i], minX };
      }
    };

    p.draw = () => {
      p.background('#87ceeb');

      p.textSize(32);
      p.noStroke();
      p.textFont("futura-pt-bold");
      p.color("black");
      p.text("Things on my mind right now", p.width/2, p.height/2);
      p.textAlign(p.CENTER);

      for (let i = 0; i < tweetIndex; i++) {
        drawCloud(cloudCoords[i], i);
      }

      for (let i = 0; i < tweetIndex; i++) {
        const cloud = cloudCoords[i];
        cloud.cx += cloud.nums[3][0] * (EASING * cloud.count);
        cloud.cy += cloud.nums[3][1] * (EASING * cloud.count);
        cloud.timer++;
        if (cloud.timer % 500 === 0) cloud.count++;
      }
      
      timer++;
      if (timer % 300 == 0) {
        if (tweetIndex < tweets.length) {
          tweetIndex++;
        }
      }
    };
  };

  useEffect(() => {
    new p5(sketch, tweetsEl.current);
  }, []);

  return <div id="tweets" ref={tweetsEl}></div>;
};

Tweets.propTypes = {
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  tweets: PropTypes.array,
};

export default Tweets;
