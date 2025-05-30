import { useParams, Link } from 'react-router-dom'
import { useCart } from '../context/CartProvider'

const mockProducts = [
  { id: 1, name: 'Product A', price: 19.99, description: 'Description for Product A' },
  { id: 2, name: 'Product B', price: 29.99, description: 'Description for Product B' },
]

export default function ProductDetails() {
  const { id } = useParams()
  const product = mockProducts.find((p) => p.id === Number(id))
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center text-red-600 text-xl font-semibold">
          Product not found.
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center py-10">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full flex flex-col items-center border border-indigo-100">
        <div className="w-32 h-32 bg-indigo-100 rounded-full mb-6 flex items-center justify-center text-5xl text-indigo-400 shadow-inner">
          <span role="img" aria-label="box">📦</span>
        </div>
        <h2 className="text-3xl font-extrabold mb-2 text-indigo-800">{product.name}</h2>
        <p className="mb-4 text-gray-700 text-lg text-center">{product.description}</p>
        <p className="mb-6 text-2xl font-bold text-indigo-700">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mb-4 px-6 py-2 bg-green-600 text-white rounded-full font-medium shadow hover:bg-green-700 hover:shadow-lg transition"
        >
          Add to Cart
        </button>
        <Link
          to="/"
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 hover:shadow-lg transition"
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}