export const IntroHero = () => {
  return (
    <div className="bg-swamp-green-200">
      <div className=" py-48 max-w-7xl m-auto px-4 lg:px-6 text-center">
        <h1 className="font-black tracking-wider font-montserrat text-swamp-green-600 text-3xl lg:text-5xl mb-6">
          Jessica Gustavsson
        </h1>
        <p className="font-open-sans tracking-wide mt-6 font-bold text-md lg:text-xl">
          Frontend developer with{' '}
          <span className="custom-underline custom-underline-tangerine relative">
            accessibility
          </span>{' '}
          in mind
        </p>
      </div>
    </div>
  );
};
