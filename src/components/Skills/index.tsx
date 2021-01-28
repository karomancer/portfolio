import './styles.scss';
import React, { useEffect, useRef } from 'react';

const SKILLZ = [
  { rating: 5, label: 'JavaScript' },
  { rating: 4, label: 'TypeScript' },
  { rating: 5, label: 'React' },
];

const CIRCLE_X = 0
const CIRCLE_Y = 200
const RADIUS = 320

const Skills = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    // Left line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(250, 800);
    ctx.strokeStyle = '#666766';
    ctx.lineWidth = 0.25;
    ctx.stroke();


    // Dat green tho
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#50bfa0';


    // Draw arc
    ctx.beginPath();
    ctx.arc(CIRCLE_X, CIRCLE_Y, RADIUS, 0, 2 * Math.PI);
    ctx.stroke();

    SKILLZ.forEach((skill, i) => {
    const y = i * 50 - CIRCLE_Y/SKILLZ.length
    const x = Math.sqrt(RADIUS*RADIUS - y*y)
      const moveToCoord = [x, y];
      const endCoord = [x + 120 * skill.rating, y + (i*20)];
      ctx.beginPath();
      

      ctx.moveTo(...moveToCoord);
      ctx.lineTo(...endCoord);
      ctx.arc(...endCoord, 10, 0, 2 * Math.PI);
      ctx.stroke();
    });
  }, []);

  return (
    <div>
      <div className="section-header">
        <hr />
        <h1>Things I Know How to Do</h1>
      </div>
      <canvas ref={canvasRef} width={window.innerWidth} height={800}></canvas>
    </div>
  );
};

export default Skills;
