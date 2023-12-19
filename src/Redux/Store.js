import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slice/CartSlice'

export const store = configureStore({
    reducer: {
        cart: counterReducer,
    },
})