import {
    createSlice
} from "@reduxjs/toolkit";
import {
    cartItems
} from "./cartItem";

const initialState = {
    cartItems: cartItems.reduce((acc, item) => {
        acc[item.id] = 0;
        return acc;
    }, {}),
    amount: 0,
    priceTotal: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementItem: (state, action) => {
            const itemId = action.payload.itemId;
            state.cartItems[itemId] += 1;
            state.amount = calculateTotalAmount(state.cartItems);
            state.priceTotal = calculateTotalPrice(state.cartItems, cartItems);
        },
        decrementItem: (state, action) => {
            const itemId = action.payload.itemId;
            if (state.cartItems[itemId] > 0) {
                state.cartItems[itemId] -= 1;
                state.amount = calculateTotalAmount(state.cartItems);
                state.priceTotal = calculateTotalPrice(state.cartItems, cartItems);
            }
        },
        clearAll: (state) => {
            state.cartItems = cartItems.reduce((acc, item) => {
                acc[item.id] = 0;
                return acc;
            }, {});
            state.amount = 0;
            state.priceTotal = 0;
        },
    },
});

const calculateTotalAmount = (cartItems) => {
    return Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
};

const calculateTotalPrice = (cartItems, allItems) => {
    return Object.entries(cartItems).reduce((acc, [itemId, count]) => {
        const item = allItems.find((item) => item.id === itemId);
        if (item) {
            return acc + count * item.price;
        }
        return acc;
    }, 0);
};

export const {
    incrementItem,
    decrementItem,
    clearAll
} = cartSlice.actions;
export default cartSlice.reducer;
