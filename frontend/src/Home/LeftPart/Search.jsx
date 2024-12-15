import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
   <div className="h-[10vh]">
     <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-4">
          <label className="input input-bordered border-[1px] rounded-lg flex items-center gap-2 w-[80%]">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button className="items-center">
            <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default Search;
