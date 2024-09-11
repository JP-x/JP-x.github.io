import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoName from "../img/Logo_Name.png"
import logoNum from "../img/Logo_Num.png"

export default function BrandedFooter() {
   var currentYear = new Date().getFullYear();
    return (
        <>
            <div className="mt-3em block-section">
                <div className="row">
                    <div className="col-sm-12 col-md-4 text-center pb-3em m-auto">
                        <a className="navbar-brand"  rel="noreferrer" href="https://jonpadilla.com" role="navigation">
                            <picture>
                                <img className="navbar-brand-logo responsive-img gradient" src={logoNum} width="100" height="200" alt="Jonathan Padilla - Software Developer"></img>
                            </picture>
                            <picture>
                                <img className="navbar-brand-text navbar-brand-logo responsive-img img-wrapper" src={logoName} width="200" height="100" alt="Jonathan Padilla - Software Developer"></img>
                            </picture>
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center pb-3em m-auto">
                        <a className="btn  p-1em btn-lg  btn-light" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/13gt_UvdSo_3Em42jYeZeGreuWAUcTGHH/view?usp=sharing" role="button">&#62; RESUME</a>
                    </div>
                    <div className="col-sm-6 col-md-4 text-center pb-3em m-auto">
                        <a className="btn p-1em btn-lg btn-light " target="_blank" href="https://www.linkedin.com/in/jonathanpadilla4" rel="noreferrer" role="button"><LinkedInIcon /> CONNECT</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col text-center">
                        <a className="btn btn-lg icon-large" target="_blank" href="https://github.com/JP-x" rel="noreferrer"><GitHubIcon fontSize="inherit"/></a>
                    </div>
                </div>

                <div className="row ">
                    <div className="col text-center info-text">
                        &copy; {currentYear} JONATHAN PADILLA
                    </div>
                </div>
            </div>

        </>
    );
}