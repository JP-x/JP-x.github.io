import logoName from "../img/Logo_Name.png"
import logoNum from "../img/Logo_Num.png"
import NightDayModeToggle from "./nightdaymodetoggle";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" rel="noreferrer" href="https://jonpadilla.com">
                        <picture>
                            <img className="d-none d-sm-inline navbar-brand-logo responsive-img gradient" src={logoNum} width="100" height="200" alt="Jonathan Padilla - Software Developer"></img>
                        </picture>
                        <picture>
                            <img className="navbar-brand-text navbar-brand-logo responsive-img img-wrapper" src={logoName} width="200" height="100" alt="Jonathan Padilla - Software Developer"></img>
                        </picture>
                    </a>
                    <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse box-shadow-on-sm" id="navbarNav">
                        <ul className="navbar-nav nav-fill w-100 me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-right-on-sm">
                                <a className="nav-link white-hover-glow" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jonathanpadilla4">CONTACT</a>
                            </li>
                            <li className="nav-item text-right-on-sm">
                                <a className="nav-link white-hover-glow" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1lrMndVkt5TuOkRkb_GDUnQ5bDsi8mCgR/view?usp=sharing">RESUME</a>
                            </li>
                            <li className="nav-item text-right-on-sm">
                                <div className="nav-link white-hover-glow">
                                    <NightDayModeToggle />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
