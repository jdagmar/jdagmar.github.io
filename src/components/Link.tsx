import * as React from 'react';

type Props = {
  url: string;
  text: string;
};

export const Link = (props: Props) => {
  return (
    <a
      href={props.url}
      className="tracking-wider uppercase border-b-2 border-gray-300 hover:border-swamp-green-500 transition motion-reduce:transition-none duration-700 ease-in-out py-2 mr-5 font-montserrat"
    >
      {props.text}
    </a>
  );
};
