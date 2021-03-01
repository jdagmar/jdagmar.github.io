import * as React from 'react';
import { Header, ProjectSection, AboutSection, IntroHero } from './components/';

export const App = () => {
  return (
    <>
      <Header />
      <IntroHero />

      <main>
        <ProjectSection />
        <AboutSection />
      </main>
    </>
  );
};
