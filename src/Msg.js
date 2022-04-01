import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function Msg({icon,nb}){
    return(
        <>
         <p className="text-sm" >{nb} <ChatBubbleIcon sx={{ fontSize: 16 }}/> </p>    
        </>
    );
}
export default Msg;