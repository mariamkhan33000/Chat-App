
const Users = () => {
  return (
    <div className="">
        <div className="flex space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="https://www.ariananews.af/wp-content/uploads/2021/09/imran-khan-1536x864.jpg" />
          </div>
        </div>
        <div className="">
          <h1 className="font-bold ">Name</h1>
          <span>name@dev.com</span>
        </div>
      </div>
    </div>
  )
}

export default Users