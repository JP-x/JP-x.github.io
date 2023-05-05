import './App.css';
import Marquee from './components/marquee';
import Navbar from './components/navbar.js'
import SectionDivider from './components/sectiondivider';

/*import './assets/css/fonts.css';*/

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1>Experienced in Software Development</h1>
            <h2>4.5 Years of Professional Software Development Experience.</h2>
          </div>
          <div className="col-6">
            <div className="loop-wrapper">
              <div className="mountain"></div>
              <div className="hill"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="tree"></div>
              <div className="rock"></div>
              <div className="truck"></div>
              <div className="wheels"></div>
            </div>
          </div>
        </div>
      </div>
      <Marquee mode="Languages" direction="left" color="teal"/>
        <Marquee mode="Technologies" direction="right" color="purple"/>
        <Marquee mode="Tools" direction="left" color="gold"/>
        <SectionDivider title="Experience" />
        <SectionDivider title="Projects" />
    </>
  );
}

export default App;
