export const ProductCard = ({ children }: { children: React.ReactNode }) => {

  return <div className="p-2 bg-gray-400 shadow-md hover:shadow-gray-300 transition-colors rounded-lg cursor-pointer">{ children }</div>
}