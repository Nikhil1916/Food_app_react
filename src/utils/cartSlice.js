import { createSlice , current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {

        // we are mutating the state over here
        addItem: (state,action) => {
            console.log(current(state));
            state.items.push(action.payload);
        },

        clearCart: (state) => {

            // /either mutate the state
            // state.items.length = 0;

            // or return a new state
            return {items:[]}
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
