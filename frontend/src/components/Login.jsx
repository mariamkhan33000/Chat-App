
const Login = () => {
  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center ">
    <div className="w-[400px] bg-slate-700 p-4 text-white rounded-lg">
        <form action="">
            <div className="text-center">
            <h1 className="text-slate-400 text-xl">Text <span className="text-green-500 ml-4 font-semibold text-xl">App</span></h1>
            </div>
            <div className="">
                <h1 className=" text-xl ">LogIn</h1>
                <div className="flex-col my-4">
                    <input type="Email" placeholder="Email . . . " className="bg-transparent w-full border border-gray-500 rounded-lg px-2 py-2 outline-none my-2"/>
                    <input type="text" placeholder="Password . . . " className="bg-transparent w-full border border-gray-500 rounded-lg px-2 py-2 outline-none my-2"/>
                    
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-slate-400">New User ? </p>
                <span className="text-blue-600 underline cursor-pointer hover:text-blue-700">Signup</span> 
                <button type="submit" value= "Signup" className="mr-2 bg-green-600 px-3 py-1 rounded-md hover:bg-green-800">Login</button>
            </div>
            
        </form>
    </div>
</div>
  )
}

export default Login