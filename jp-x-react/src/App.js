import './App.css';
import HeaderWithGraphic from './components/headerwithgraphic';
import InfoSection from './components/infosection';
import Marquee from './components/marquee';
import Navbar from './components/navbar.js'
import SectionDivider from './components/sectiondivider';

/*import './assets/css/fonts.css';*/

function App() {
  return (
    <>

      <Navbar></Navbar>
      <HeaderWithGraphic/>
      <Marquee mode="Languages" direction="left" color="teal"/>
        <Marquee mode="Technologies" direction="right" color="purple"/>
        <Marquee mode="Tools" direction="left" color="gold"/>
        <SectionDivider title="Experience" />
        <InfoSection imageDirection="left"/>
        <InfoSection imageDirection="right"/>
        <SectionDivider title="Projects" />
        <InfoSection imageDirection="left"/>
        <InfoSection imageDirection="right"/>
        <InfoSection imageDirection="left"/>
    </>
  );
}

export default App;
