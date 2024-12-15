import Users from "./Users";

function User() {
  return (
    <div className="text-white ">
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md w-[98%]">
        Message
      </h1>
      <div className=" flex-1 overflow-auto" style={{ maxHeight: "calc(84vh - 10vh)"}}>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      <Users/>
      </div>
    </div>
  );
}

export default User;
