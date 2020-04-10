import * as React from 'react';
import { ProjectCards, Header, Nav } from './components/';

export const App = () => {
  return (
    <>
      <div className="p-5">
        <Header />
        {/* <Nav /> */}
      </div>
      <main className="bg-gray-200 p-4">
        <ProjectCards />
      </main>
    </>
  );
};
