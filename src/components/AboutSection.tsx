import portrait from './../images/portrait.jpeg';
import { SkillsList } from './SkillsList';
import { SectionHeading, Link } from '.';

export const AboutSection = () => {
  return (
    <section id="about" className="anchor-stop">
      <div className="bg-swamp-green-200">
        <div className="max-w-7xl m-auto pb-20 pt-24 px-4 lg:px-10">
          <SectionHeading text="About" />
          <div className="flex justify-between lg:flex-row flex-col-reverse mt-10 w-full my-4">
            <div className="max-w-3xl">
              <h2 className="tracking-wide font-maven-pro text-3xl font-black">
                Profile
              </h2>
              <p className="text-md font-open-sans mt-4 mb-16 leading-7">
                I am a fullstack developer based in Stockholm, currently as an
                consultant. I have extensive experience writing WCAG compliant
                code, testing and reviewing codebases from an accessibility
                standpoint.
              </p>
              <SkillsList />
              <div className="mt-16">
                <h2 className="tracking-wide font-maven-pro text-3xl font-black mb-5">
                  Networking
                </h2>
                <Link
                  url="https://www.linkedin.com/in/jessica-gustavsson-96375515b/"
                  text="LinkedIn"
                  activeColor="swamp-green-500"
                />
                <Link
                  url="https://github.com/jdagmar"
                  text="Github"
                  activeColor="swamp-green-500"
                />
              </div>
            </div>
            <div className="h-72 w-72 ml-10 mb-10 lg:mb-0 flex-shrink-0">
              <img
                className="rounded-full w-full h-full object-cover m-auto"
                src={portrait}
                alt=""
              />
            </div>
          </div>
          <div className="max-w-xl"></div>
        </div>
      </div>
    </section>
  );
};
