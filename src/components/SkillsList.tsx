import * as React from 'react';
import { skills } from './../data/skills';
import { iconHelper } from '../helpers/iconHelper';

export const SkillsList = () => {
  const skillSet = skills.map((skill, i, skills) => (
    <li className="font-montserrat text-sm">
      {skill}
      {skills.length - 1 !== i && (
        <div className="text-tangerine-500 h-2 w-2 inline-block mx-2">
          {iconHelper('dot', 0.5)}
        </div>
      )}
    </li>
  ));

  return (
    <>
      <h3 className="uppercase font-montserrat text-xl font-black">
        Technical skills
      </h3>
      <ul className="flex flex-wrap leading leading-7 text-center my-4">
        {skillSet}
      </ul>
    </>
  );
};
