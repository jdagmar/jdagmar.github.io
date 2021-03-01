import * as React from 'react';
import projects from './../data/projects.json';
import { iconHelper } from './../helpers/iconHelper';
import { Link } from './Link';

export const ProjectCards = () => {
  const cards = projects.map((project, i) => (
    <li
      className={`mb-40 lg:w-11/12  p-10 bg-gray-100 shadow-sm backdrop backdrop-behind ${
        i % 2 === 1
          ? 'backdrop-tangerine backdrop-left'
          : 'backdrop-swampgreen backdrop-right'
      } relative ${i % 2 === 1 ? 'ml-2 lg:ml-auto' : 'mr-2 lg:mr-auto'}`}
      key={project.name}
    >
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="tracking-wide font-montserrat text-4xl font-black mb-5">
              {project.name}
            </h3>
            <p className="font-open-sans my-2 max-w-xl leading-7 mb-6">
              {project.description}
            </p>
            <div
              className={`mb-10 ${
                i % 2 === 1 ? 'text-tangerine-500' : 'text-swamp-green-500'
              }`}
            >
              {project.topics.map((topic, i, topics) => (
                <span key={i}>
                  <span className="font-montserrat uppercase tracking-wider text-gray-700 text-sm">
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
              <Link
                url={project.website}
                text="View Project"
                activeColor={i % 2 === 1 ? 'tangerine-500' : 'swamp-green-500'}
              />
            )}
            <Link
              url={project.repo}
              text="View Code"
              activeColor={i % 2 === 1 ? 'tangerine-500' : 'swamp-green-500'}
            />
          </div>
        </div>
        {project.screenshot.map((screenshot, i) => (
          <div
            className="w-full sm:w-1/3 lg:w-2/5 pt-6 sm:pt-0 sm:pl-8"
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
  return <ul className="mt-32 flex-1 justify-center flex-wrap">{cards}</ul>;
};
