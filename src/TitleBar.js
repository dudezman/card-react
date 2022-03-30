import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Social from './social';
function TitleBar(){
    return(
        <>
        <label className="">
            <b>AVARA</b> <KeyboardArrowDownIcon className='rotate-180 text-gray-400'/> <Social />
        </label>
        </>
    );
}
export default TitleBar;