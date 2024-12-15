import Chatuser from "./Chatuser"
import Messages from "./Messages"
import Typesend from "./Typesend"


const Right = () => {
  return (
    <div className="w-[70%] bg-green-300">
        <Chatuser/>
        <div className="mb-3">
        <Messages />
        </div>
       
        <Typesend/>
    </div>
  )
}

export default Right