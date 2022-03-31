import PersonIcon from '@mui/icons-material/Person';

function User({icon,nb}){
    return(
        <>
         <p className="text-xl">{nb} <PersonIcon/> </p>    
        </>
    );
}
export default User;



// import PersonIcon from '@mui/icons-material/Person';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

// function User({icon,nbmsg,nbusr}){
//     return(
//         <>
//          <p className="text-xl"> {nbmsg} <ChatBubbleIcon/> {nbusr} <PersonIcon/></p>    
 
//         </>
//     );
// }
// export default User;