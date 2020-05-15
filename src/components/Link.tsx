import * as React from 'react';

type Props = {
  url: string;
  text: string;
};

export const Link = (props: Props) => {
  return (
    <a
      href={props.url}
      className="uppercase border-b-2 hover:border-swamp-green-500 transition duration-500 ease-in-out py-2 mr-5 font-montserrat"
    >
      {props.text}
    </a>
  );
};
