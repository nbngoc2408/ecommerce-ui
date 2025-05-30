import { configureStore } from '@reduxjs/toolkit'

// Example: import your reducers here
// import cartReducer from './features/cart/cartSlice'
// import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    // cart: cartReducer,
    // user: userReducer,
  },
})

// For use in your app entry point
export default store