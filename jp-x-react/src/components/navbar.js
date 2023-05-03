import logoName from "../img/Logo_Name.png"
import logoNum from "../img/Logo_Num.png"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        
        <a className="navbar-brand" href="#">
        <picture>
            <img src={logoNum} width="150" height="200" alt="Jonathan Padilla - Software Developer"></img>
        </picture>
        <picture>
            <img src={logoName} width="300" height="200" alt="Jonathan Padilla - Software Developer"></img>
        </picture>
        </a>

           

            <button className="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">RESUME</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <DarkModeIcon/>
                    <LightModeIcon/>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}
  