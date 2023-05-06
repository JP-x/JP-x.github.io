import './App.css';
import HeaderWithGraphic from './components/headerwithgraphic';
import InfoSectionLeft from './components/infosectionleft';
import InfoSectionRight from './components/infosectionright';
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
        <InfoSectionLeft/>
        <InfoSectionRight/>
        <SectionDivider title="Projects" />
        <InfoSectionLeft/>
        <InfoSectionRight/>
        <InfoSectionLeft/>
    </>
  );
}

export default App;
