import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './component/ProductList'
import ProductDetails from './component/ProductDetails'
import { CartProvider } from './context/CartProvider'
import CartPage from './component/CartPage'
import RegisterForm from './component/RegisterForm'
import LoginForm from './component/LoginForm'
import CheckoutPage from './component/CheckoutPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App