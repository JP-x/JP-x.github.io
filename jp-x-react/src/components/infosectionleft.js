import CasinoIcon from '@mui/icons-material/Casino';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as content from '../repository/content'


export default function InfoSectionLeft() {
    return (
        <>
                <div className="container mt-3em mb-3em">
                <div className="row">
                <div className="col-sm-12 col-md-5">
                        <div>
                            <h1 className="info-text">CASINO LEFT</h1>
                            <CasinoIcon className="giant-icon" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 ">
                        <div className="row info-text text-teal">
                            <div className="col-sm-12 col-md-6">
                                Software Engineer
                            </div>
                            <div className="col-sm-12 col-md-6">
                                {content.smDates}
                            </div>
                        </div>

                        <div className="info-text">
                            {content.smData.map((item) => <li key={item + "1"}>{item}</li>)}
                        </div>
                        <ul>
                        </ul>
                    </div>


                </div>
            </div>

        </>
    );
}