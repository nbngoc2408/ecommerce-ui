import { Link } from 'react-router-dom'
import { useCart } from '../context/CartProvider'

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <h2 className="text-3xl font-extrabold mb-4 text-indigo-800">Your Cart is Empty</h2>
        <Link
          to="/"
          className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 hover:shadow-lg transition"
        >
          Shop Products
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center py-10">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-800">🛒 Your Cart</h2>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-2xl text-indigo-400 shadow-inner">
                <span role="img" aria-label="box">📦</span>
              </div>
              <div>
                <div className="font-semibold text-lg text-gray-900">{item.name}</div>
                <div className="text-indigo-700 font-bold">${item.price}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                className="px-2 py-1 bg-indigo-200 text-indigo-700 rounded hover:bg-indigo-300"
                disabled={item.qty <= 1}
              >-</button>
              <span className="px-3">{item.qty}</span>
              <button
                onClick={() => updateQty(item.id, item.qty + 1)}
                className="px-2 py-1 bg-indigo-200 text-indigo-700 rounded hover:bg-indigo-300"
              >+</button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >Remove</button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-8">
          <span className="text-xl font-bold text-indigo-800">
            Total: $
            {cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)}
          </span>
          <Link
            to="/checkout"
            className="px-6 py-2 bg-green-600 text-white rounded-full font-medium shadow hover:bg-green-700 hover:shadow-lg transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-full font-medium shadow hover:bg-indigo-700 hover:shadow-lg transition"
      >
        ← Continue Shopping
      </Link>
    </div>
  )
}