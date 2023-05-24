import logoName from "../img/Logo_Name.png"
import logoNum from "../img/Logo_Num.png"
import NightDayModeToggle from "./nightdaymodetoggle";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="nav-wrapper container-fluid">
                <a className="navbar-brand" href="#">
                    <picture>
                        <img className="d-none d-sm-inline navbar-brand-logo responsive-img gradient" src={logoNum} width="100" height="200" alt="Jonathan Padilla - Software Developer"></img>
                    </picture>
                    <picture>
                        <img className="navbar-brand-text navbar-brand-logo responsive-img img-wrapper" src={logoName} width="200" height="100" alt="Jonathan Padilla - Software Developer"></img>
                    </picture>
                </a>

                <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav nav-fill w-100 me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link white-hover-glow" href="#">CONTACT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link white-hover-glow" href="#">RESUME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link white-hover-glow" href="#">
                                <NightDayModeToggle/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
  