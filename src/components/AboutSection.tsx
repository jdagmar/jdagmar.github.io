import * as React from 'react';
import portrait from './../images/portrait-github.png';
import { SkillsList } from './SkillsList';
import { SectionHeading, Link } from '.';

export const AboutSection = () => {
  return (
    <section id="about" className="">
      <div className="max-w-6xl m-auto py-8 px-4">
        <SectionHeading text="About" />
        <div className="flex justify-between lg:flex-row flex-col-reverse mt-12 w-full my-4 p-8 bg-gray-200">
          <div className="max-w-xl">
            <h2 className="uppercase font-montserrat text-2xl font-black">
              Who am I?
            </h2>
            <p className="text-md font-open-sans mt-4 mb-8">
              Hi, I'm Jessica a frontend developer who is passionate about
              building accessible and scalable stuff.
            </p>
            <SkillsList />
            <div className="mt-10">
              <Link
                url="https://www.linkedin.com/in/jessica-gustavsson-96375515b/"
                text="LinkedIn"
              />
              <Link url="https://github.com/jdagmar" text="Github" />
            </div>
          </div>
          <div className="m-4 mb-10 lg:mb-0 relative">
            <img
              className="rounded-full h-64 w-64 object-cover m-auto"
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
