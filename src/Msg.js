import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
function Msg({icon,nb}){
    return(
        <>
         <p className="text-xl">{nb} <ChatBubbleIcon/> </p>    
        </>
    );
}
export default Msg;