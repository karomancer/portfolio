import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Nav({ onMenuToggle = () => {}, color }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            style={color && {
              color: color,
            }}
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <AniLink cover bg="#50bfa0" direction="down" to="/">Home</AniLink>
              </li>
              <li>
                <AniLink cover bg="#50bfa0" direction="down" to="/portfolio">Portfolio</AniLink>
              </li>
              <li>
                <AniLink cover bg="#50bfa0" direction="down" to="/resume">Resume</AniLink>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
