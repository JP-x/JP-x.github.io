import FlippingText from "./flippingtext";
import Svganimator from "./svganimator";

export default function HeaderWithGraphic({ mode, direction, color }) {
    return (
        <div className="container-fluid mt-3em mb-3em block-section">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <h1 className="stretched-big-text2">EXPERIENCED IN</h1>
            <FlippingText/>
            <h2><strong>5 Years</strong> of <strong>Professional Software Development</strong>  Experience.</h2>
          </div>
          <div className="col-5">
            <div className="d-none d-sm-inline">
            <Svganimator/>
            </div>
          </div>
        </div>
      </div>
    );
}
