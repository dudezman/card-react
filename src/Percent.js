import LockIcon from '@mui/icons-material/Lock';
import PieChartIcon from '@mui/icons-material/PieChart';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
function Percent(){
    return(
        <div className='pt-2'>
            <LockIcon className='text-black br-red-400'/> 60 %
             <span className='bg-gradient-to-r from-col1 to-col2 text-white rounded-2xl p-1 m-2'>
                <PieChartIcon /> 93 %
            </span>
            <span className='text-white bg-[#fe9700] rounded-2xl p-1 m-2'>
                <FeedIcon className=''/> Audit
            </span>
            <span className='text-white bg-gradient-to-r from-col1 to-col2  rounded-2xl p-1 m-2'>
                <SearchIcon className=''/> 
            </span>
        </div>
    );
}
export default Percent;