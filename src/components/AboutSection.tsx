import * as React from 'react';
import portrait from './../images/portrait-github.png';
import { SkillsList } from './SkillsList';
import { SectionHeading, IconLink } from '.';

export const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-300">
      <div className="max-w-6xl m-auto pt-8 pb-16 px-4 md:px-0">
        <SectionHeading text="About" />
        <div className="flex justify-center items-cente flex-wrap mt-5">
          <div className="m-4">
            <img
              className="rounded-full h-48 w-48 object-cover m-auto"
              src={portrait}
              alt=""
            />
          </div>
          <div className="ml-5 max-w-xl">
            <p className="font-open-sans mb-4">
              <span className="text-swamp-green-600">Hi</span>, I work as a
              frontend developer in Stockholm building accessible web apps by
              day and react enthusiast by night.
            </p>
            <SkillsList />
            <div className="mt-5">
              <IconLink
                icon="linkedin"
                iconSize={1.2}
                iconPosition="left"
                url="https://www.linkedin.com/in/jessica-gustavsson-96375515b/"
                text="Find me on LinkedIn"
                isTextVisible={true}
                cssClass="inline-block mr-4 text-sm"
              />
              <IconLink
                icon="github"
                iconSize={1.2}
                iconPosition="left"
                url="https://github.com/jdagmar"
                text="See some of my code"
                isTextVisible={true}
                cssClass="inline-block text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
