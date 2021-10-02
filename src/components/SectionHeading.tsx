type Props = {
  text: string;
};

export const SectionHeading = (props: Props) => {
  return (
    <>
      <h2 className="font-maven-pro text-swamp-green-600 font-black text-4xl lg:text-5xl pb-3">
        {props.text}
      </h2>
    </>
  );
};
