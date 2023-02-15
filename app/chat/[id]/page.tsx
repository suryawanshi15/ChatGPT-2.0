import Chat from "../../../components/Chat"
import Chatinput from "../../../components/Chatinput"

type Props = {
    params : {
        id : string ;
    }
}
function ChatPage({params : {id}} : Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId = {id}/>
      <Chatinput chatId = {id}/>
    </div>
  )
}

export default ChatPage