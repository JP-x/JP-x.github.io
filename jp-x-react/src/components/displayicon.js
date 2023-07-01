import CasinoIcon from '@mui/icons-material/CasinoOutlined';
import RequestQuoteIcon from '@mui/icons-material/RequestQuoteOutlined';
import BrushIcon from '@mui/icons-material/BrushOutlined';
import WebIcon from '@mui/icons-material/WebOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBoxOutlined';

export default function DisplayIcon({iconName})
{
    let size = 175;
    let iconComponent;

    switch(iconName)
    {
        case "RequestQuoteIcon" :
            iconComponent = <RequestQuoteIcon sx={{fontSize: size}} className="icon-wrapper"/>
            break;
        case "AccountBoxIcon":
            iconComponent = <AccountBoxIcon sx={{ fontSize: size}} className="icon-wrapper"/>
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
    return (
        <>
            {iconComponent}
        </>
        );
}