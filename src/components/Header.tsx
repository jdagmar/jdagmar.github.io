import * as React from 'react';
import { Nav } from '.';

export const Header = () => {
  return (
    <header className="p-6 bg-gray-100 fixed top-0 w-full z-20 opacity-90 tracking-wide">
      <div className="max-w-7xl m-auto flex justify-between items-center">
        <div>
          <p className="font-montserrat text-sm font-bold">
            <span className="hidden lg:block">Jessica Gustavsson</span>
            <span className="text-lg lg:hidden">JG</span>
          </p>
          <p className=" font-open-sans text-xs hidden lg:block">
            Frontend developer
          </p>
        </div>
        <Nav />
      </div>
    </header>
  );
};
