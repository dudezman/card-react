import LockIcon from '@mui/icons-material/Lock';
import PieChartIcon from '@mui/icons-material/PieChart';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
function Percent(){
    return(
        <div className='pt-2 text-[70%] '>
            <LockIcon className='text-black br-red-400 'sx={{ fontSize: 16 }}/> <span>60 % </span>
             <span className='bg-gradient-to-r from-col1 to-col2 text-white rounded-2xl p-1 '>
                <PieChartIcon sx={{ fontSize: 16 }}/> 93 %
            </span>
            <span className='text-white bg-[#fe9700] rounded-2xl p-1 '>
                <FeedIcon className='' sx={{ fontSize: 16 }}/> Audit
            </span>
            <span className='text-white bg-gradient-to-r from-col1 to-col2  rounded-2xl p-1 '>
                <SearchIcon className='' sx={{ fontSize: 16 }}/> 
            </span>
        </div>
    );
}
export default Percent;