import { ProjectCards } from './ProjectCards';
import { SectionHeading } from '.';

export const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="max-w-7xl m-auto pb-12  pt-32 px-4 lg:px-6">
        <SectionHeading text="Projects" />
        <p className="mt-4 font-open-sans leading-7">
          A selection of projects primarily showcasing my skills wihtin the
          frontend area.
        </p>
        <ProjectCards />
      </div>
    </section>
  );
};
