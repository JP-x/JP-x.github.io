import CasinoIcon from '@mui/icons-material/Casino';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import AccountBoxIcon from '@mui/icons-material/AccountBox';


export default function InfoSectionLeft({ mode, direction, color }) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div>
                            <h1>SAN MANUEL CASINO</h1>
                            <CasinoIcon className="giant-icon" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="info-text">
                            {sm_points.map((item) => <li>{item}</li>)}
                        </div>
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}

const sm_points =
    [
        "Improved onboarding processes by automating imports of employee information and keeping records synchronized within Active Directory and other employee related systems. Added automated email alerts which allowed for faster troubleshooting.",
        "Improved attendance tracking for employee events by developing an event tracking web application in Asp.Net MVC. The web application contained up‑to‑date employee information and allowed for exports of attendees for events.",
        "Supported and implemented conversions of data from one major enterprise system to another leveraging SQL."];