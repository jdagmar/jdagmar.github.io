import * as React from 'react';
import projects from './../data/projects.json';
import { iconHelper } from './../helpers/iconHelper';
import { Link } from './Link';

export const ProjectCards = () => {
  const cards = projects.map(project => (
    <li className="w-full my-16 p-8 bg-gray-200" key={project.name}>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="uppercase font-montserrat text-2xl font-black">
              {project.name}
            </h3>
            <p className="font-open-sans my-2 max-w-xl">
              {project.description}
            </p>
            <div className="mt-4 mb-2">
              {project.topics.map((topic, i, topics) => (
                <>
                  <span className="font-montserrat text-sm">{topic}</span>
                  {topics.length - 1 !== i && (
                    <div className="text-tangerine-500 h-2 w-2 inline-block mx-2">
                      {iconHelper('dot', 0.5)}
                    </div>
                  )}
                </>
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
        {project.screenshot.map(screenshot => (
          <div className="w-full sm:w-1/3 lg:w-1/4 pt-6 sm:pt-0 sm:pl-8">
            <img
              src={process.env.PUBLIC_URL + '/' + screenshot}
              alt=""
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>
    </li>
  ));
  return <ul className="flex justify-center flex-wrap">{cards}</ul>;
};
