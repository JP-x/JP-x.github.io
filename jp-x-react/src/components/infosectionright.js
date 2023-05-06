import CasinoIcon from '@mui/icons-material/Casino';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function InfoSectionRight({ mode, direction, color }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="info-text">
                            {sm_points.map((item) => <li>{item}</li>)}
                        </div>
                        <ul>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div>
                            <h1>SAN MANUEL CASINO</h1>
                            <CasinoIcon className="giant-icon" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}


const sm_points =
    [
        "Developed, installed, tested, debugged, and documented programs and applications using various IDEs including Visual Studio, Visual Studio Code and Mulesoft Anypoint Studio.",
        "Developed and collaborated with other developers to deliver enterprise software using C#, Asp.Net MVC, HTML, CSS, Javascript, and Typescript. All of which were supported by APIs deployed via Microsoft Azure, Microsoft IIS, and/or Mulesoft.",
        "Collaborated with network administrators, systems analysts, and software engineers to assist in resolving problems with existing software products or company software systems."];