import blueGreenSVG from "../img/redblue_spiral.svg"
import GradientDivider from "./gradientdivider";
export default function LightSection() {
    return (
        <>
            <div className="pt-1em">
                <div className="light-section block-section">
                    <div className="container">
                        <div className="row m-auto">
                            <div className="col-sm-12 col-md-7 pt-3em">
                                <div className="row info-text-large">
                                    <div className="col-md-12">
                                        Actively Seeking Opportunities
                                    </div>
                                </div>

                                <div className="info-text">
                                    <p>
                                        Experienced with Internal Tools, Integrations, APIs, Web Applications, Cloud Development
                                    </p>
                                    <p>
                                        Looking for Mid Level roles
                                    </p>
                                    <p>
                                        Open to onsite, remote , hybrid roles
                                    </p>
                                </div>
                                <ul>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className="d-none d-md-block">
                                <div className="grid-bg">
                                    <div className="center-wrapper">
                                        <svg viewBox="0 0 100 100" id="sw-js-blob-svg2" xmlns="http://www.w3.org/2000/svg" version="1.1" >
                                            <defs>
                                                <linearGradient id="sw-gradient22" x1="0" x2="1" y1="1" y2="0">
                                                    <stop id="stop1" stopColor="rgba(204, 55, 255, 1)" offset="0%"></stop>
                                                    <stop id="stop2" stopColor="rgba(41.84, 251.39, 255, 1)" offset="100%"></stop>
                                                </linearGradient>
                                            </defs>
                                            <path fill="none" d="M16.7,-26C23.7,-24.8,33.1,-24.6,36.6,-20.5C40.2,-16.3,38,-8.2,38.1,0C38.1,8.2,40.5,16.5,36.2,19.4C31.9,22.3,21,19.9,13.9,22.3C6.7,24.6,3.4,31.7,-0.8,33.1C-4.9,34.4,-9.9,30,-15.9,27C-21.9,24,-29.1,22.5,-30,18.2C-30.9,13.9,-25.6,7,-22.9,1.5C-20.3,-3.9,-20.3,-7.8,-20.2,-13.5C-20.1,-19.3,-20,-26.8,-16.6,-30.1C-13.2,-33.3,-6.6,-32.3,-0.9,-30.8C4.8,-29.2,9.6,-27.1,16.7,-26Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="2" stroke="url(#sw-gradient)"></path>
                                        </svg>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-4 text-center m-auto">
                                <a className="btn btn-lg btn-dark p-1em" rel="noreferrer" href="https://www.linkedin.com/in/jonathanpadilla4" target="_blank" role="button">&#62; CONTACT ME</a>
                            </div>
                        </div>
                    </div>

                    <GradientDivider />
                </div>
            </div>

        </>
    );
}