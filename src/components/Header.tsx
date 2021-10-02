import { useEffect, useState } from 'react';
import { Nav } from '.';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 484) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <header
      className={` ${
        scrolled ? 'fixed top-0 w-full z-20 opacity-90' : null
      } p-6 bg-gray-100`}
    >
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <Nav />
      </div>
    </header>
  );
};
