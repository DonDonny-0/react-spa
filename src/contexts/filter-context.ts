import { createContext, useContext, Dispatch, SetStateAction, use } from "react";

type FilterContextType = {
  catQuery: string;
  setCatQuery: Dispatch<SetStateAction<string>>;

  stkQuery: boolean;
  setStkQuery: Dispatch<SetStateAction<boolean>>;

  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;

  minPriceQuery: number;
  setMinPriceQuery: Dispatch<SetStateAction<number>>;

  maxPriceQuery: number;
  setMaxPriceQuery: Dispatch<SetStateAction<number>>;

  ascending: string,
  setAscending: Dispatch<SetStateAction<string>>;
  
  sortBy: string,
  setSortBy: Dispatch<SetStateAction<string>>;

};

export const FilterContext = createContext<FilterContextType | null>(null);

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}