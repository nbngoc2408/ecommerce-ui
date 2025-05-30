import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartProvider'

export default function CheckoutPage() {
  const { cart } = useCart()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    // TODO: Send order to backend
    alert('Order placed!\n' + JSON.stringify(data, null, 2))
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
        <h2 className="text-3xl font-extrabold mb-4 text-indigo-800">Your cart is empty</h2>
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-xl p-10 max-w-xl w-full border border-indigo-100"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-800 text-center">Checkout</h2>
        {/* Address */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Shipping Address</h3>
          <input
            {...register('address', { required: 'Address is required' })}
            placeholder="123 Main St"
            className="w-full px-4 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          <input
            {...register('city', { required: 'City is required' })}
            placeholder="City"
            className="w-full px-4 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          <input
            {...register('zip', { required: 'ZIP code is required' })}
            placeholder="ZIP Code"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.zip && <p className="text-red-500 text-sm">{errors.zip.message}</p>}
        </div>
        {/* Payment */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Payment Info</h3>
          <input
            {...register('card', { required: 'Card number is required' })}
            placeholder="Card Number"
            className="w-full px-4 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.card && <p className="text-red-500 text-sm">{errors.card.message}</p>}
          <input
            {...register('expiry', { required: 'Expiry date is required' })}
            placeholder="MM/YY"
            className="w-full px-4 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
          <input
            {...register('cvc', { required: 'CVC is required' })}
            placeholder="CVC"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
        </div>
        {/* Shipment */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">Shipment Method</h3>
          <select
            {...register('shipment', { required: 'Select a shipment method' })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            <option value="">Select...</option>
            <option value="standard">Standard (3-5 days)</option>
            <option value="express">Express (1-2 days)</option>
          </select>
          {errors.shipment && <p className="text-red-500 text-sm">{errors.shipment.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-full font-medium shadow hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}