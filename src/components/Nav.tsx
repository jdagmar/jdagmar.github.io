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
    <li className="text-sm" key={link.text}>
      <Link url={link.url} text={link.text} activeColor="swamp-green-500" />
    </li>
  ));

  return (
    <nav className="text-center w-full">
      <ul className="flex justify-end">{navLinks}</ul>
    </nav>
  );
};
