import React from 'react';
import { Link } from 'gatsby'

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
    <li key={`nav-link-${title}`}>
      {slugMatches(slug) ? (
        <span>{title}</span>
      ) : (
        <Link bg="#50bfa0" direction="down" to={slug}>
          {title}
        </Link>
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
