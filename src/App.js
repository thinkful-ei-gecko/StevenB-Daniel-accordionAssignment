import React from 'react';
import Accordion from './state-drills/Accordion';
import sections from './state-drills/sections';

function App() {
  console.log(sections)
  return (
    <main className='App'>
      <div><Accordion sections={sections}/></div>
    </main>
  );
}

export default App;