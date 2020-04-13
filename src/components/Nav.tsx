import * as React from 'react';

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
      <a href={link.url} className="border-b-2 border-tangerine-500 p-2 mr-2">
        {link.text}
      </a>
    </li>
  ));

  return (
    <nav className="text-center">
      <ul className="flex">{navLinks}</ul>
    </nav>
  );
};
