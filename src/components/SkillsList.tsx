import * as React from 'react';
import { skills } from './../data/skills';
import { iconHelper } from '../helpers/iconHelper';

export const SkillsList = () => {
  const skillSet = skills.map((skill, i, skills) => (
    <li
      className="tracking-wider font-montserrat text-sm leading-7 uppercase"
      key={i}
    >
      {skill}
      {skills.length - 1 !== i && (
        <div className="text-swamp-green-500 h-2 w-2 inline-block mx-2">
          {iconHelper('dot', 0.5)}
        </div>
      )}
    </li>
  ));

  return (
    <>
      <h2 className="tracking-wide font-montserrat text-3xl font-black">
        What I can do
      </h2>
      <ul className="flex flex-wrap text-center my-4">{skillSet}</ul>
    </>
  );
};
