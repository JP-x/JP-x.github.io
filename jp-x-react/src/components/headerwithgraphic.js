export default function HeaderWithGraphic({ mode, direction, color }) {
    return (
        <div className="container-fluid mt-3em mb-3em section-min-height">
        <div className="row">
          <div className="col-7">
            <h1 className="stretched-big-text">EXPERIENCED IN</h1>
            <h1 className="stretched-big-text gradient-text">SOFTWARE DEVELOPMENT</h1>
            <h2>4.5 Years of Professional Software Development Experience.</h2>
          </div>
          <div className="col-5">
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
    );
}
