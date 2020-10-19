import * as React from 'react';
import { Nav } from '.';

export const Header = () => {
  return (
    <header className="p-4 bg-gray-200 fixed top-0 w-full z-10">
      <div className="max-w-6xl m-auto flex justify-between items-center">
        <div>
          <p className="font-montserrat text-lg font-black">
            Jessica Gustavsson
          </p>
          <p className="font-open-sans text-sm">Frontend developer</p>
        </div>
        <Nav />
      </div>
    </header>
  );
};
