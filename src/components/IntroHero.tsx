import * as React from 'react';

export const IntroHero = () => {
  return (
    <div className="h-screen text-center bg-gray-200 pt-24">
      <h1 className="uppercase tracking-wide font-montserrat text-swamp-green-500 text-3xl">
        Jessica Gustavsson
      </h1>
      <p className="font-open-sans flex justify-center mb-10">
        Frontend developer with accessibility in mind
      </p>
      <a
        href="#projects"
        className="uppercase font-montserrat border-tangerine-500 border-2 py-2 px-3 transition duration-500 ease-in-out hover:border-swamp-green-500"
      >
        See projects
      </a>
    </div>
  );
};
