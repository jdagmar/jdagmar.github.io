import * as React from 'react';
import projects from './../data/projects.json';
import { iconHelper } from './../helpers/iconHelper';
import { Link } from './Link';

export const ProjectCards = () => {
  const cards = projects.map((project, i) => (
    <li
      className={`my-40 lg:w-11/12 mr-2 p-8 bg-gray-200 backdrop backdrop-behind ${
        i % 2 === 1
          ? 'backdrop-tangerine backdrop-left'
          : 'backdrop-swampgreen backdrop-right'
      } relative ${i % 2 === 1 ? 'lg:ml-auto' : 'lg:mr-auto'}`}
      key={project.name}
    >
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="uppercase font-montserrat text-2xl font-black">
              {project.name}
            </h3>
            <p className="font-open-sans my-2 max-w-xl">
              {project.description}
            </p>
            <div
              className={`mt-4 mb-2 ${
                i % 2 === 1 ? 'text-tangerine-500' : 'text-swamp-green-500'
              }`}
            >
              {project.topics.map((topic, i, topics) => (
                <span key={i}>
                  <span className="font-montserrat text-gray-700 text-sm">
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
          <div className="flex mt-1 mb-3 text-gray-700">
            {project.website !== null && (
              <Link url={project.website} text="View Project" />
            )}
            <Link url={project.repo} text="View Code" />
          </div>
        </div>
        {project.screenshot.map((screenshot, i) => (
          <div
            className="w-full sm:w-1/3 lg:w-1/4 pt-6 sm:pt-0 sm:pl-8"
            key={i}
          >
            <div className="img-square">
              <img
                src={process.env.PUBLIC_URL + '/' + screenshot}
                alt=""
                className="h-auto overflow-hidden w-full hover:border-tangerine-500"
              />
            </div>
          </div>
        ))}
      </div>
    </li>
  ));
  return <ul className="flex-1 justify-center flex-wrap md:p-6">{cards}</ul>;
};
