import { Product } from "../types/product";
import CategoryFilter from "../scenes/categoryFilter";
import PriceFilter from "../scenes/priceFilter";
import StockFilter from "../scenes/stockFilter";
import Search from "../scenes/search";

const FilterSection = (
{ 
  products, 
}: { 
  products: Product[],
}
) => {

  return (
    <>
      <form className="hidden lg:flex flex-row items-center justify-evenly p-4 border border-teal-700 rounded-xl bg-teal-800">
        <Search />
        <CategoryFilter products={products} />
        <PriceFilter products={products} />
        <StockFilter products={products} />
        <div className="mt-2">
          <button className="p-3 border rounded-2xl bg-white/30 hover:bg-white/15 transition-colors border-teal-700 cursor-pointer">
            <p className="text-red-800 font-bold text-lg">Reset</p>
          </button>
        </div>
      </form>

      <form className="lg:hidden flex flex-col justify-evenly p-4 border border-teal-700 rounded-xl bg-teal-800">
        <div>
          <Search />
          <CategoryFilter products={products} />
          <PriceFilter products={products} />
          <StockFilter products={products} />
          <div className="p-2">
            <button className=" border rounded-2xl w-full mt-8 bg-white/30 hover:bg-white/15 p-2 transition-colors border-teal-700 cursor-pointer">
              <p className="text-red-800 font-bold text-lg">Reset</p>
            </button>
          </div>
        </div>
      </form>
      
    </>
  )
}

export default FilterSection;