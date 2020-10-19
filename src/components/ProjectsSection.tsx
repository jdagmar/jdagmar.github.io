import * as React from 'react';
import { ProjectCards } from './ProjectCards';
import { SectionHeading } from '.';

export const ProjectSection = () => {
  return (
    <section id="projects" className="section relative anchor-stop">
      <div className="max-w-6xl m-auto pb-8 pt-16 px-4">
        <SectionHeading text="Projects" />
        <ProjectCards />
      </div>
    </section>
  );
};
