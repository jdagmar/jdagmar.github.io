import * as React from 'react';
import projects from './../projects.json';

export const ProjectCards = () => {
  const cards = projects.map(project => (
    <li
      className="bg-white m-2 p-4 w-full md:w-1/2 shadow rounded flex flex-col justify-between"
      key={project.name}
    >
      <div>
        <h2 className="font-montserrat text-xl text-swamp-green-500 font-black">
          {project.name}
        </h2>
        <p className="font-open-sans text-base my-2">{project.description}</p>
        {project.url !== null && (
          <a className="text-sm" href={project.url}>
            Link to app
          </a>
        )}
      </div>
      <div className="mt-4 mb-2">
        {project.topics.map(topic => (
          <span className="ont-montserrat bg-tangerine-500 p-1 rounded mr-2 text-xs">
            {topic}
          </span>
        ))}
      </div>
    </li>
  ));
  return <ul className="flex flex-wra my-4 max-w-6xl m-auto">{cards}</ul>;
};
