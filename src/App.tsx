import * as React from 'react';
import { Header, ProjectSection, AboutSection, IntroHero } from './components/';

export const App = () => {
  return (
    <>
      <IntroHero />
      <Header />

      <main>
        <ProjectSection />
        <AboutSection />
      </main>
    </>
  );
};
