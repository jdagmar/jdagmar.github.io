import * as React from 'react';
import { ProjectCards } from './ProjectCards';
import { SectionHeading } from '.';

export const ProjectSection = () => {
  return (
    <section id="projects" className="section relative anchor-stop">
      <div className="max-w-7xl m-auto pb-12 pt-24 px-4 lg:px-0">
        <SectionHeading text="Projects" />
        <ProjectCards />
      </div>
    </section>
  );
};
