import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
function Social(){
    return(
        <>
            <TwitterIcon className="text-gray-400" sx={{ fontSize: 16 }}/>
            <TelegramIcon className="text-gray-400" sx={{ fontSize: 16 }}/>
            <LanguageIcon className="text-gray-400" sx={{ fontSize: 16 }}/>
        </>
    );
}
export default Social;