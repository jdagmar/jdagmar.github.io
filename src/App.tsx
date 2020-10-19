import * as React from 'react';
import { Header, ProjectSection, AboutSection, IntroHero } from './components/';

export const App = () => {
  return (
    <>
      <Header />
      <IntroHero />
      <main className="mb-12">
        <ProjectSection />
        <AboutSection />
      </main>
    </>
  );
};
