import * as React from 'react';
import { ProjectCards } from './ProjectCards';
import { SectionHeading } from '.';

export const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="max-w-7xl m-auto pb-12 pt-32 px-4 lg:px-6">
        <SectionHeading text="Projects" />
        <ProjectCards />
      </div>
    </section>
  );
};
