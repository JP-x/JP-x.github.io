import CasinoIcon from '@mui/icons-material/Casino';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as content from '../repository/content'

//order-md-first
export default function InfoSection({imageDirection}) {
    var imageClasses = "order-sm-last order-md-first col-sm-12 col-md-4";
    if(imageDirection == "left"){
        imageClasses = "order-sm-last order-md-first col-sm-12 col-md-4";
    }
    else{
        imageClasses = "order-sm-last col-sm-12 col-md-4";
    }

    return (
        <>
            <div className="container mt-3em block-section">
                <div className="row">
                    <div className="order-1 col-sm-12 col-md-8 ">
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
                    <div className={imageClasses}>
                        <div>
                            <h1 className="info-text">CASINO</h1>
                            <CasinoIcon className="giant-icon" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}