import * as React from 'react';
import { ProjectCards } from './ProjectCards';
import { SectionHeading } from '.';

export const ProjectSection = () => {
  return (
    <section id="projects" className="md:h-screen  bg-gray-200">
      <div className="max-w-6xl m-auto py-8 px-4 md:px-0">
        <SectionHeading text="Projects" />
        <ProjectCards />
      </div>
    </section>
  );
};
