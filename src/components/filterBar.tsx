import { Product } from "../types/product";
import CategoryFilter from "../scenes/categoryFilter";
import PriceFilter from "../scenes/priceFilter";
import StockFilter from "../scenes/stockFilter";
import Search from "../scenes/search";
import { Dispatch, SetStateAction, useState } from "react";

const FilterSection = (
{ 
  products, 
}: { 
  products: Product[],
}
) => {

  return (
    <form className="flex flex-row justify-between p-4 border border-gray-600 rounded-xl bg-gray-400">
      <div className="flex flex-row items-center justify-start w-2xl">
        <Search />
        <CategoryFilter products={products} />
        <PriceFilter products={products} />
        <StockFilter products={products} />
        <button className="p-3 border rounded-2xl mt-2 ml-18 bg-white/30 hover:bg-white/15 transition-colors border-gray-300 cursor-pointer">
          <p className="text-red-800 font-bold text-lg">Reset</p>
        </button>
      </div>
    </form>
  )
}

export default FilterSection;