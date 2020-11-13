import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const isWindowDefined = typeof window !== 'undefined';

export default function Nav({ onMenuToggle = () => {}, color }) {
  const slugMatches = slug => {
    if (isWindowDefined) {
      return window.location.pathname === slug
    }
    return false;
  };

  const LINKS = [
    { title: 'Home', slug: '/' },
    { title: 'Portfolio', slug: '/portfolio' },
    { title: 'Résumé', slug: '/resume' },
  ];

  const navLinks = LINKS.map(({ title, slug }) => (
    <li>
      {slugMatches(slug) ? (
        <span>{title}</span>
      ) : (
        <AniLink cover bg="#50bfa0" direction="down" to={slug}>
          {title}
        </AniLink>
      )}
    </li>
  ));

  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            style={
              color && {
                color: color,
              }
            }
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
            <ul>{navLinks}</ul>
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
