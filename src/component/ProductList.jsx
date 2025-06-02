import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProductsAsync, selectProducts, selectProductsError, selectProductsStatus } from '../feature/products/productsSlice'

export default function ProductList() {
  // const [products, setProducts] = useState([])
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')

  useEffect(() => {
    // Simulate API call
    if (status === 'idle') {
      dispatch(fetchProductsAsync());
    }
  }, [status, dispatch])

  const filteredProducts = products.filter((product) =>
    product.sku.toLowerCase().includes(search.toLowerCase())
  )

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <div className="text-indigo-600 text-xl font-semibold animate-pulse">Loading products...</div>
      </div>
    )
  }

  if (status === 'failed') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center text-red-600 text-xl font-semibold">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800 drop-shadow">
          🛒 Featured Products
        </h2>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full max-w-md px-4 py-2 border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg">No products found.</div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-indigo-100"
              >
                <div className="w-28 h-28 bg-indigo-100 rounded-full mb-6 flex items-center justify-center text-4xl text-indigo-400 shadow-inner">
                  <span role="img" aria-label="box">📦</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 tracking-wide">{product.sku}</h3>
                <span className="mb-4 text-xl text-indigo-700 font-bold">${product.price}</span>
                <Link
                  to={`/product/${product.id}`}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 hover:shadow-lg transition"
                >
                  View Details
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}