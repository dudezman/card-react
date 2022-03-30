import PersonIcon from '@mui/icons-material/Person';

function User({icon,nb}){
    return(
        <>
         <p className="text-xl">{nb} <PersonIcon/> </p>    
        </>
    );
}
export default User;