import CasinoIcon from '@mui/icons-material/Casino';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function DisplayIcon({iconName})
{
    let size = 250;
    let iconComponent;
    switch(iconName)
    {
        case "RequestQuoteIcon" :
            iconComponent = <RequestQuoteIcon sx={{fontSize: size}} className="icon-wrapper"/>
            break;
        case "AccountBoxIcon":
            iconComponent = <AccountBoxIcon sx={{fontSize: size}} className="icon-wrapper"/>
            break;
        case "BrushIcon":
            iconComponent = <BrushIcon sx={{fontSize: size}} className="icon-wrapper"/>
            break;
        case "WebIcon":
            iconComponent = <WebIcon sx={{fontSize: size}} className="icon-wrapper"/>
            break;
        case "CasinoIcon":
            iconComponent = <CasinoIcon sx={{fontSize: size}} className="icon-wrapper"/>
            break;
        default:
    }
    return iconComponent;
}