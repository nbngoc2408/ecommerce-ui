import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './feature/products/productsSlice'

// Example: import your reducers here
// import cartReducer from './features/cart/cartSlice'
// import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

// For use in your app entry point
export default store