import * as React from 'react';
import { Link } from './Link';

export const Nav = () => {
  const links = [
    {
      text: 'Projects',
      url: '#projects',
    },
    {
      text: 'About',
      url: '#about',
    },
  ];

  const navLinks = links.map(link => (
    <li>
      <Link url={link.url} text={link.text} />
    </li>
  ));

  return (
    <nav className="text-center">
      <ul className="flex">{navLinks}</ul>
    </nav>
  );
};
