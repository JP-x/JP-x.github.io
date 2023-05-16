import CasinoIcon from '@mui/icons-material/Casino';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function DisplayIcon(iconName)
{
    let iconComponent;
    switch(iconName)
    {
        case "RequestQuoteIcon" :
            iconComponent = <RequestQuoteIcon className="giant-icon"/>
            break;
        case "AccountBoxIcon":
            iconComponent = <AccountBoxIcon className="giant-icon"/>
            break;
        case "BrushIcon":
            iconComponent = <BrushIcon className="giant-icon"/>
            break;
        case "WebIcon":
            iconComponent = <WebIcon className="giant-icon"/>
            break;
        case "CasinoIcon":
            iconComponent = <CasinoIcon className="giant-icon"/>
            break;
        default:
    }
    return iconComponent;
}


export default function ProjectItem({imageDirection, data}) {
    let iconToDisplay = DisplayIcon(data.icon);
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
                            <a className="text-teal" href={data.demoUrl} target="_blank" role="button">VIEW DEMO</a>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                {data.dates}
                            </div>
                        </div>

                        <div className="info-text">
                            {data.description.map((item) => <li key={item + "1"}>{item}</li>)}
                        </div>
                        <ul>
                        </ul>
                    </div>
                    <div className={imageClasses}>
                        <div className="gradient-on-hover">
                            <h1 className="info-text">{data.name}</h1>
                            {iconToDisplay}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}