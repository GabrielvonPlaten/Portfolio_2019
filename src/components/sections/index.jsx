import React from 'react';
import Home from './Home/Home';
import Works from './Works/Works';
import About from './Technologies/GitHub/GitHub';
import Contact from './Contact/Contact';

const Sections = () => {
  return (
    <div>
      <Home />
      <Works />
      <About />
      <Contact />
    </div>
  );
};

export default Sections;
