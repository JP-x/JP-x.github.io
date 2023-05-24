import './App.css';
import HeaderWithGraphic from './components/headerwithgraphic';
import Marquee from './components/marquee';
import Navbar from './components/navbar.js'
import SectionDivider from './components/sectiondivider';
import LightSection from './components/lightsection';
import BrandedFooter from './components/brandedfooter';
import ExperienceSection from './components/experience/experiencesection';
import ProjectSection from './components/project/projectsection';
import React from 'react';

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <HeaderWithGraphic />
        <Marquee mode="Languages" direction="left" color="blue" />
        <Marquee mode="Technologies" direction="right" color="teal" />
        <Marquee mode="Tools" direction="left" color="blue2" />
        <SectionDivider title="Experience" />
        <ExperienceSection/>
        <SectionDivider title="Projects" />
        <ProjectSection/>
        <LightSection />
        <BrandedFooter/>
      </div>
    </>
  );
}

export default App;
