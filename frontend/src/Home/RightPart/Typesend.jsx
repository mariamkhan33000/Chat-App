import { IoSend } from "react-icons/io5";

const Typesend = () => {
  return (
    <div className="flex space-x-5 items-center h-[10vh] text-white p-2">
       <div className="w-[75%] ">
       <input type="text" placeholder="Type here . . . !" className="input input-bordered w-full bg-slate-700 outline-none px-4 py-3 " />
       </div>
       <button className="text-blue-800">
       <IoSend  className="text-5xl"/>
       </button>
    </div>
  )
}

export default Typesend