import * as React from 'react';
import { Nav } from '.';

export const Header = () => {
  return (
    <header className="p-4 bg-gray-200 fixed top-0 w-full z-20">
      <div className="max-w-6xl m-auto flex justify-between items-center">
        <div>
          <p className="font-montserrat text-sm font-bold">
            <span className="hidden lg:block">Jessica Gustavsson</span>
            <span className="text-lg lg:hidden">JG</span>
          </p>
          <p className="font-open-sans text-xs hidden lg:block">
            Frontend developer
          </p>
        </div>
        <Nav />
      </div>
    </header>
  );
};
