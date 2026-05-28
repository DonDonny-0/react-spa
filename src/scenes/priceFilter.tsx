import { useFilter } from "../contexts/filter-context";
import { type Product } from "../types/product";

const PriceFilter = ({ 
  products 
}: { 
  products: Product[] 
}) => {

  const prices = products.map((product) => product.price)
  const { minPriceQuery, setMinPriceQuery, maxPriceQuery, setMaxPriceQuery } = useFilter();

  return (
    <div className="flex flex-row justify-between w-full">

      <div className="flex flex-col p-2 w-1/2">
        <p className="text-gray-100 text-shadow-gray-500 text-shadow-sm w-full">min price</p>
        <input  
          type="number"
          min={Math.min(...prices)}
          max={Math.max(...prices)}
          value={Number.isFinite(minPriceQuery) ? minPriceQuery : ""}
          onChange={(e) => setMinPriceQuery(Number.isFinite(e.target.valueAsNumber) ? e.target.valueAsNumber : NaN)}
          className="bg-teal-600 text-gray-100 p-2 mr-2 rounded-xl w-full"
          placeholder="min"
        />
      </div>

      <div className="flex flex-col p-2 w-1/2">
        <p className="text-gray-100 text-shadow-gray-500 text-shadow-sm w-full">max price</p>
        <input  
          type="number"
          min={Math.min(...prices)}
          max={Math.max(...prices)}
          value={Number.isFinite(maxPriceQuery) ? maxPriceQuery : ""}
          onChange={(e) => setMaxPriceQuery(Number.isFinite(e.target.valueAsNumber) ? e.target.valueAsNumber : NaN)}
          className="bg-teal-600 text-gray-100 p-2 mr-10 rounded-xl w-full"
          placeholder="max"
        />
      </div>

    </div>
  )
}

export default PriceFilter;