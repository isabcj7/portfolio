// src/App.tsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Colors from './Colors';
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Colors />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;