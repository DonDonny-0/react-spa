import { type Product } from "../types/product";
import { useFilter } from "../contexts/filter-context";

const StockFilter = ({ 
  products,
}: { 
  products: Product[],
}) => {

  const { stkQuery, setStkQuery } = useFilter()

  return (
    <div className="mr-10 w-60">
      <p className="text-gray-100 text-shadow-gray-500 text-shadow-sm">Stock</p>
      <div className="flex items-center bg-gray-300 p-3 rounded-xl">
        {/* <label htmlFor="inStock" className="w-20">In Stock</label> */}
        <input
          type="checkbox"
          name="inStock" 
          id="inStock" 
          checked={stkQuery}
          onChange={(e) => setStkQuery(e.target.checked)}
          className="mx-auto cursor-pointer"
        />
      </div>
    </div>
  )
}

export default StockFilter;