import { useRef } from "react";
import { type Product } from "../types/product";
import { Dispatch, SetStateAction } from "react";
import { useFilter } from "../contexts/filter-context";

const CategoryFilter = ({ 
  products,
}: { 
  products: Product[],
}
) => {

  const inputRef = useRef(null);
  const {catQuery, setCatQuery} = useFilter();

  return (
    <div>
      <label htmlFor="categories" className="pl-1 text-gray-100 text-shadow-gray-500 text-shadow-sm">Category</label>
      <br></br>
      <select 
        name="categories" 
        id="categories" 
        ref={inputRef}
        value={catQuery}
        defaultValue="select"
        onChange={(e) => setCatQuery(e.target.value)}
        className="bg-gray-300 p-2 mr-10 rounded-xl cursor-pointer"
      >
        <option value="select">-- select --</option>
        {
          new Set(products.map((product) => product.category)).entries()
          .map( (category) => (
            <option value={category[0]}>
              {category[0]}
            </option>
          ))
        }
      </select>
    </div>
  )
}

export default CategoryFilter;