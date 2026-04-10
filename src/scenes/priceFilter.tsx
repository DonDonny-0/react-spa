import { useFilter } from "../contexts/filter-context";
import { type Product } from "../types/product";

const PriceFilter = ({ 
  products 
}: { 
  products: Product[] 
}) => {

  const prices = products.map((product) => product.price)
  const { minPriceQuery, setMinPriceQuery } = useFilter();
  const { maxPriceQuery, setMaxPriceQuery } = useFilter();

  return (
    <div className="flex flex-col">
      <div className="flex">
        <p className="text-gray-100 text-shadow-gray-500 text-shadow-sm">min price</p>
        <p className="ml-15 text-gray-100 text-shadow-gray-500 text-shadow-sm">max price</p>
      </div>
      <div className="flex">
        <input  
          type="number"
          min={Math.min(...prices)}
          max={Math.max(...prices)}
          value={minPriceQuery}
          onChange={(e) => setMinPriceQuery(e.target.valueAsNumber)}
          className="bg-gray-300 p-2 mr-2 rounded-xl"
          placeholder="min"
        />
        <input  
          type="number"
          min={Math.min(...prices)}
          max={Math.max(...prices)}
          value={maxPriceQuery}
          onChange={(e) => setMaxPriceQuery(e.target.valueAsNumber)}
          className="bg-gray-300 p-2 mr-10 rounded-xl "
          placeholder="max"
        />
      </div>
    </div>
  )
}

export default PriceFilter;