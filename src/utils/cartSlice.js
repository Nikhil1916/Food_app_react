import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {

        // we are mutating the state over here
        addItem: (state,action) => {
            state.items.push(action.payload);
        },

        clearCart: (state) => {
            state.items.length = 0;
        },

        removeItem: (state,actions) => {
            state.items.pop();
        }
    }
});


// createSlice will return a object like this
/*
    {
        actions: {
            addItem
        },
        reducers:
    }
*/
console.log(cartSlice);
export const { addItem , clearCart , removeItem } = cartSlice.actions; 
export default cartSlice.reducer;
