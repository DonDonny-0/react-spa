import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { use, useState } from "react";
import { Product } from "./types/product";
import { products as productsData } from "./data/products";
import ProductList from "./components/productsList";
import FilterSection from "./components/filterBar";
import { FilterContext } from "./contexts/filter-context";
import SortingSection from "./components/sortingSection";

export function App() {
  return (
    <>
      <Header />
      <Container>
        <Main />
      </Container>
    </>
  );
}

function FilterProvider({ children }: { children: React.ReactNode }) {

  const [catQuery, setCatQuery] = useState("");
  const [stkQuery, setStkQuery] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPriceQuery, setMinPriceQuery] = useState(2.99);
  const [maxPriceQuery, setMaxPriceQuery] = useState(399.99);
  const [ascending, setAscending] = useState("asc");
  const [sortBy, setSortBy] = useState("price");

  return (
    <FilterContext.Provider
      value={{
        catQuery,
        setCatQuery,
        stkQuery,
        setStkQuery,
        searchQuery,
        setSearchQuery,
        minPriceQuery,
        setMinPriceQuery,
        maxPriceQuery,
        setMaxPriceQuery,
        ascending,
        setAscending,
        sortBy,
        setSortBy
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function Main() {

  const [products] = useState<Product[]>(productsData);

  return (
    <FilterProvider>
      <div className="mt-24 w-9/10 mx-auto mb-8">
        <FilterSection products={products} />
        <SortingSection products={products} />
        <ProductList products={products} />
      </div>
    </FilterProvider>
  );
}

