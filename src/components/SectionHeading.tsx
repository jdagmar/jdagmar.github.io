import * as React from 'react';

type Props = {
  text: string;
};

export const SectionHeading = (props: Props) => {
  return (
    <>
      <h2 className="uppercase font-montserrat text-swamp-green-500 font-black text-4xl">
        {props.text}
      </h2>
      <div className="w-8 border-b-2 border-swamp-green-500"></div>
    </>
  );
};
