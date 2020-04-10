import * as React from 'react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Header = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl text-tangerine-500">Jessica Gustavsson</h1>
      <p className="font-open-sans text-white-800">Frontend developer</p>
      {/* <div className="flex justify-center">
        <GitHubIcon />
        <LinkedInIcon />
      </div> */}
    </header>
  );
};
