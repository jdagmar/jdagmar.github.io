import * as React from 'react';

type Props = {
  text: string;
};

export const SectionHeading = (props: Props) => {
  return (
    <>
      <h2 className="tracking-wide font-montserrat text-swamp-green-600 font-black text-4xl lg:text-5xl pb-3">
        {props.text}
      </h2>
      <div className="w-20 border-b-4 border-swamp-green-600 rounded"></div>
    </>
  );
};
