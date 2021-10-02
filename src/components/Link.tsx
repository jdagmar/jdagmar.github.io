import * as React from 'react';

type Props = {
  url: string;
  text: string;
  activeColor: string;
};

export const Link = (props: Props) => {
  return (
    <a
      href={props.url}
      className={`uppercase tracking-wider border-b-2 border-gray-300 focus:outline-none  hover:border-${props.activeColor} focus:border-${props.activeColor} transition motion-reduce:transition-none duration-700 ease-in-out py-2 mr-5 font-maven-pro`}
    >
      {props.text}
    </a>
  );
};
