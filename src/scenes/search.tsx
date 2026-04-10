import { Dispatch, SetStateAction, useRef } from "react";
import { useFilter } from "../contexts/filter-context";


const Search = () => {

  const inputRef = useRef(null);
  const {searchQuery, setSearchQuery} = useFilter();

  return (
    <div>
      <label htmlFor="search" className="pl-1 text-gray-100 text-shadow-gray-500 text-shadow-sm">Search Products</label><br />
      <input 
        ref={inputRef}
        value={searchQuery}
        onChange={(e) =>  setSearchQuery(e.target.value)}
        placeholder="Electronics..."
        type="search" 
        id="search" 
        name="search" 
        className="bg-gray-300 p-2 mr-10 rounded-xl"
      />
    </div>
  )
}

export default Search;