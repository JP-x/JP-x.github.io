import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function NightDayModeToggle(){
    function toggleMode(){
            console.log('Mode toggle');
    }
    
    return(
        <div>
            <DarkModeIcon id="darkMode" onClick={toggleMode} />
            <LightModeIcon id="lightMode" onClick={toggleMode} />
        </div>
    );
}

