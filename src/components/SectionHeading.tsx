import * as React from 'react';

type Props = {
  text: string;
};

export const SectionHeading = (props: Props) => {
  return (
    <>
      <h2 className=" font-montserrat text-swamp-green-500 font-black text-5xl pb-3">
        {props.text}
      </h2>
      <div className="w-20 border-b-4 border-swamp-green-500"></div>
    </>
  );
};
