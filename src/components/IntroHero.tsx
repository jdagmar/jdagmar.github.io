import * as React from 'react';
import portrait from './../images/portrait-github.png';

export const IntroHero = () => {
  return (
    <div className="bg-gray-200 pt-24">
      <div className=" py-32 max-w-7xl m-auto flex justify-between px-4 xl:px-0">
        <div>
          <h1 className="font-montserrat text-swamp-green-500 text-2xl lg:text-5xl transition motion-reduce:transition-none duration-1000 ease-in-out group-hover:text-tangerine-500 mb-6">
            Jessica Gustavsson
          </h1>
          <p className="font-open-sans tracking-wide">
            Frontend developer with accessibility in mind
          </p>
        </div>

        {/* <a
          href="#projects"
          className="uppercase font-montserrat border-tangerine-500 border-2 py-2 px-3 transition motion-reduce:transition-none duration-1000 ease-in-out group-hover:border-swamp-green-500"
        >
          See projects
        </a> */}
      </div>
    </div>
  );
};
