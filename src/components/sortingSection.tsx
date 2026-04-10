import { Product } from "../types/product";
import { useFilter } from "../contexts/filter-context";

const SortingSection = (
  {products} : { products: Product[]}
) => {

  const {ascending, setAscending, sortBy, setSortBy} = useFilter();

  return (
    <div className="flex w-90 justify-evenly">
      <form className="flex items-center">
        <h1 className="text-white">Sort Products by: </h1>
        <select className="ml-4 cursor-pointer bg-gray-300 rounded-xl p-2" name="rating-price" id="rating-price" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
        <select className="ml-4 cursor-pointer bg-gray-300 rounded-xl p-2" name="asc-desc" id="asc-desc" value={ascending} onChange={(e) => setAscending(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
    </div>
  )
}

export default SortingSection;