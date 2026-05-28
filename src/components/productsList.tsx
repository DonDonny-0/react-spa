import { Product } from "../types/product";
import { ProductCard } from "../scenes/productCard";
import { useFilter } from "../contexts/filter-context";

const productList = (
{ 
  products, 
}: { 
  products: Product[], 
} 
) => {

  const {
    searchQuery, 
    catQuery, 
    stkQuery,
    minPriceQuery,
    maxPriceQuery,
    sortBy, 
    ascending,
    } = useFilter();
    
  const sortedProducts = [...products].sort((a, b) => {
  if (sortBy === "price") {
    return ascending === "asc"
      ? a.price - b.price
      : b.price - a.price;
  } else {
    return ascending === "asc"
      ? a.rating - b.rating
      : b.rating - a.rating;
  }
});

  const filteredProducts = sortedProducts
  .filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter(product =>
    product.category.toLowerCase().includes(catQuery.toLowerCase())
  )
  .filter(product =>
    product.inStock === stkQuery
  )
  .filter(product => {
    const minOk = Number.isFinite(minPriceQuery) ? product.price > minPriceQuery : true;
    const maxOk = Number.isFinite(maxPriceQuery) ? product.price < maxPriceQuery : true;
    return minOk && maxOk;
  });

  return ( 
    <>
      <div className="hidden md:grid gap-6 grid-cols-3 bg-teal-800 p-5 rounded-xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.imageUrl} className="mt-2 w-full rounded-lg border border-white" alt="" />
              <div className="mt-2">
                <p className="text-xl">{product.name}</p>
                <p className="text-xl">{product.category}</p>
                <p className="text-xl">{product.inStock ? "In Stock" : "Out of Stock"}</p><br />
                <div className="flex justify-between text-2xl">
                  <p>Rating: {product.rating}</p>
                  <p className="text-right">£{product.price}</p>
                </div>
              </div>
            </ProductCard>
          ))
        ) : (
          <p className="text-gray-200 p-20 w-200 text-xl">Sorry, we could not find any matches</p>
        )}
      </div>

      <div className="md:hidden grid gap-6 grid-cols-1 bg-teal-800 p-4 rounded-xl">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <img src={product.imageUrl} className="mt-2 w-full rounded-lg border border-white" alt="" />
              <div className="mt-2">
                <p className="text-xl">{product.name}</p>
                <p className="text-xl">{product.category}</p>
                <p className="text-xl">{product.inStock ? "In Stock" : "Out of Stock"}</p><br />
                <div className="flex justify-between text-2xl">
                  <p>Rating: {product.rating}</p>
                  <p className="text-right">£{product.price}</p>
                </div>
              </div>
            </ProductCard>
          ))
        ) : (
          <p className="text-gray-200 p-20 w-200 text-xl">Sorry, we could not find any matches</p>
        )}
      </div>
    </>
  )
}

export default productList;