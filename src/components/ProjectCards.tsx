import * as React from 'react';
import projects from './../data/projects.json';
import { iconHelper } from './../helpers/iconHelper';
import { Link } from './Link';

export const ProjectCards = () => {
  const cards = projects.map((project, i) => (
    <li className={`mb-40 p-14 bg-gray-100`} key={project.name}>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="tracking-wide font-maven-pro text-4xl font-black mb-5">
              {project.name}
            </h3>
            <p className="font-open-sans my-2 lg:w-10/12 leading-7 mb-6">
              {project.description}
            </p>
            <div className="mb-10 text-tangerine-500">
              {project.topics.map((topic, i, topics) => (
                <span key={i}>
                  <span className="font-maven-pro uppercase tracking-wide text-gray-700 text-sm sm:text-xs">
                    {topic}
                  </span>
                  {topics.length - 1 !== i && (
                    <div className="h-2 w-2 inline-block mx-2">
                      {iconHelper('dot', 0.5)}
                    </div>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="flex mt-1 mb-3 text-gray-700 sm:text-sm">
            {project.website !== null && (
              <Link
                url={project.website}
                text="View Project"
                activeColor="swamp-green-500"
              />
            )}
            <Link
              url={project.repo}
              text="View Code"
              activeColor="swamp-green-500"
            />
          </div>
        </div>
      </div>
    </li>
  ));
  return (
    <ul className="mt-32 flex-1 justify-center flex-wrap gap-4">{cards}</ul>
  );
};
