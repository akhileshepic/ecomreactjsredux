import { createSlice } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Load items from localStorage when initializing the state
const loadFromLocalStorage = () => {
    const storedItems = localStorage.getItem('itmes');;
    return storedItems ? JSON.parse(storedItems) : [];
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadFromLocalStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (existingIndex === -1) {
                state.items = [...state.items, { ...action.payload, qty: 1 }];
            } else {
                state.items[existingIndex].qty += 1;
            }

            // Save to localStorage after updating the state
            localStorage.setItem('itmes', JSON.stringify(state.items));
            toast.success('Item Added Successfully')
        },

        removeFromCart: (state, action) => {
            const updatedState = state.items.filter(item => item.id !== action.payload);
            state.items = updatedState;

            // Save to localStorage after updating the state
            localStorage.setItem('itmes', JSON.stringify(updatedState));
            toast.error('Item removed Successfully')
        },
        incrementQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.items.findIndex(item => item.id === id);

            if (item === -1) {

            } else {
                state.items[item].qty += 1;
            }

            localStorage.setItem('itmes', JSON.stringify(state.items));
            toast.success('Quantity Added Successfully')
        },
        decrementQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.items.findIndex(item => item.id === id);
            if (item === -1) {

            } else {
                state.items[item].qty -= 1;
            }
            localStorage.setItem('itmes', JSON.stringify(state.items));
            toast.success('Quantity remove Successfully')
        }
    },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
