import * as React from 'react';
import portrait from './../images/portrait-github.png';
import { SkillsList } from './SkillsList';
import { SectionHeading, Link } from '.';

export const AboutSection = () => {
  return (
    <section id="about" className="anchor-stop">
      <div className="max-w-7xl m-auto pb-12 pt-24 px-4 lg:px-0">
        <SectionHeading text="About" />
        <div className="flex justify-between lg:flex-row flex-col-reverse mt-12 w-full my-4 p-8 bg-gray-100 shadow-sm">
          <div className="max-w-3xl">
            <h2 className="font-montserrat text-2xl font-black">Who am I?</h2>
            <p className="text-md font-open-sans mt-4 mb-12 leading-7">
              Hi, I'm Jessica a frontend developer who is passionate about
              building accessible and scalable stuff.
            </p>
            <SkillsList />
            <div className="mt-16">
              <Link
                url="https://www.linkedin.com/in/jessica-gustavsson-96375515b/"
                text="LinkedIn"
              />
              <Link url="https://github.com/jdagmar" text="Github" />
            </div>
          </div>
          <div className="h-64 w-64 m-4 mb-10 lg:mb-0 relative backdrop backdrop-tangerine backdrop-left backdrop-round backdrop-overlay">
            <img
              className="rounded-full w-full h-full object-cover m-auto absolute z-10"
              src={portrait}
              alt=""
            />
          </div>
        </div>
        <div className="max-w-xl"></div>
      </div>
    </section>
  );
};
