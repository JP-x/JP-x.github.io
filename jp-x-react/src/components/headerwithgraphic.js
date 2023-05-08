import redBlueSVG  from "../img/redblue_spiral.svg"
import orangeRedSVG  from "../img/redorange_spiral.svg"
import blueGreenSVG from "../img/bluegreen_spiral.svg"

export default function HeaderWithGraphic({ mode, direction, color }) {
    return (
        <div className="container-fluid mt-3em mb-3em block-section">
        <div className="row">
          <div className="col-7">
            <h1 className="stretched-big-text">EXPERIENCED IN</h1>
            <h1 className="stretched-big-text gradient-text">SOFTWARE DEVELOPMENT</h1>
            <h2>4.5 Years of Professional Software Development Experience.</h2>
          </div>
          <div className="col-5">
           <div className="parallax-wrap">
           <img src={blueGreenSVG}></img>
           </div>
          </div>
        </div>
      </div>
    );
}
