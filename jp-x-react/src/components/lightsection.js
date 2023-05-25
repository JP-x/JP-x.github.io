import blueGreenSVG from "../img/redblue_spiral.svg"
export default function LightSection() {
    return (
        <>
            <div className="light-section block-section g-0">
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
                        <div>
                        <img alt="shapes graphic" src={blueGreenSVG}></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col text-center">
                    <a className="btn btn-lg btn-dark p-1em" rel="noreferrer" href="https://www.linkedin.com/in/jonathanpadilla4" target="_blank" role="button">&#62; CONTACT ME</a>
                </div>
                </div>
                <div className="row mt-3em">
                    <div className="gradient small-height hide-overflow"></div>
                </div>
            </div>

        </>
    );
}