import * as React from 'react';
import projects from './../data/projects.json';
import { iconHelper } from './../helpers/iconHelper';
import { IconLink } from './IconLink';

export const ProjectCards = () => {
  const cards = projects.map(project => (
    <li className="w-full  py-1 pr-2 last:pr-0 md:w-1/3" key={project.name}>
      <div className="shadow rounded bg-white py-2 px-4 flex flex-col justify-between h-full">
        <div className="">
          <h3 className="font-montserrat text-xl font-black">{project.name}</h3>
          <div className="flex mt-1 mb-3 text-gray-700">
            {project.website !== null && (
              <IconLink
                icon="globe"
                iconSize={1}
                iconPosition="left"
                url={project.website}
                text="Try out"
                isTextVisible={true}
                cssClass="text-xs mr-2"
              />
            )}
            <IconLink
              icon="code"
              iconSize={1}
              iconPosition="left"
              url={project.url}
              text="Source code"
              isTextVisible={true}
              cssClass="text-xs"
            />
          </div>

          <p className="font-open-sans text-base my-2">{project.description}</p>
        </div>
        <div className="mt-4 mb-2">
          {project.topics.map((topic, i, topics) => (
            <>
              <span className="font-montserrat text-xs">{topic}</span>
              {topics.length - 1 !== i && (
                <div className="text-tangerine-500 h-2 w-2 inline-block mx-2">
                  {iconHelper('dot', 0.5)}
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </li>
  ));
  return <ul className="flex justify-center flex-wrap py-4 mt-5">{cards}</ul>;
};
