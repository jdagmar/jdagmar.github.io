import * as React from 'react';
import { IconLink } from './../components/';
import { iconHelper } from '../helpers/iconHelper';

export const IntroHero = () => {
  return (
    <div className="h-screen text-center bg-gray-100 pt-24">
      <div>
        <h1 className="font-montserrat text-swamp-green-500 text-5xl">
          Hi! I'm Jessica.
        </h1>
        <p className="font-open-sans flex justify-center">
          I build things with
          <span className="font-open-sans inline-flex justify-center items-center mx-2">
            <span className="text-tangerine-500 mr-2">
              {iconHelper('dot', 0.5)}
            </span>
            accessibility
            <span className="text-tangerine-500 ml-2">
              {iconHelper('dot', 0.5)}
            </span>
          </span>
          in mind
        </p>
      </div>
      <IconLink
        icon="chevronright"
        iconSize={1.5}
        iconPosition="right"
        url="#projects"
        text="See some projects"
        isTextVisible={true}
        cssClass="border-tangerine-500 border-2 py-2 px-3 rounded mt-10 transition duration-500 ease-in-out hover:bg-tangerine-500"
      />
    </div>
  );
};
